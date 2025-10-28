"use client"

import { auth } from "@/lib/firebase/client"
import {
  ParsedToken,
  signInWithEmailAndPassword,
  User as firebaseUser,
  sendPasswordResetEmail,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { removeToken, setToken } from "./actions"

type AuthContextType = {
  currentUser: firebaseUser | null
  customClaims: ParsedToken | null
  logout: () => Promise<void>
  loginWithEmail: (email: string, password: string) => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<firebaseUser | null>(null)
  const [customClaims, setCustomClaims] = useState<ParsedToken | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        setCurrentUser(user)
        if (user) {
          const tokenResult = await user.getIdTokenResult()
          const token = tokenResult.token
          const refreshToken = user.refreshToken
          const claims = tokenResult.claims
          setCustomClaims(claims ?? null)
          if (token && refreshToken) {
            await setToken({ token, refreshToken })
          }
        } else {
          await removeToken()
        }
      } catch (error) {
        console.log(error)
        await removeToken()
      }
    })
    return () => unsubscribe()
  }, [])

  const logout = async (): Promise<void> => {
    await auth.signOut()
    await removeToken()
  }

  const loginWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log(err)
      alert("ログインに失敗しました")
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (err) {
      console.error(err)
      alert("パスワードリセットメールの送信に失敗しました。")
    }
  }

  if (!isHydrated) {
    return <>{children}</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        customClaims,
        logout,
        loginWithEmail,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
