"use client"
import React, { FC, useEffect, useState } from "react"
import { HeaderDrawer } from "./HeaderDrawer"
import Link from "next/link"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase/client"
import { useAuth } from "@/context/auth"
import { useRouter } from "next/navigation"

export const Header: FC = () => {
  const router = useRouter()
  const auth = useAuth()
  const uid = auth?.currentUser?.uid
  const [isAuthority, setIsAuthority] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!uid) return
    const getUser = async () => {
      const docRef = doc(db, "users", `${uid}`)
      const snapShot = await getDoc(docRef)
      if (!snapShot.exists()) return
      if (
        snapShot.data().role === "admin" ||
        snapShot.data().role === "member"
      ) {
        setIsAuthority(true)
      }
    }
    getUser()
  }, [uid])

  const signOutHandler = async () => {
    await auth?.logout()
    router.refresh()
  }

  useEffect(() => {
    if (!auth || !uid) return
    const getPermission = async () => {
      try {
        const userRef = doc(db, "users", uid)
        const userSnap = await getDoc(userRef)
        if (!userSnap.exists()) {
          const email = auth.currentUser?.email
          if (!email) return
          await setDoc(userRef, {
            email: email,
            role: "user",
          })
          const docRef = doc(db, "users", uid, "permissions", "makers")
          const snapShot = await getDoc(docRef)
          if (snapShot.exists()) return
          await setDoc(docRef, {
            daimaru: false,
          })
        }
      } catch (error) {
        console.error("Error setting user data:", error)
      }
    }
    getPermission()
  }, [uid, auth])

  if (!isHydrated) {
    return (
      <div className="px-3 sticky top-0 h-12 flex items-center z-50 border-1 border-gray-200 bg-blue-900 lg:bg-transparent" />
    )
  }

  return (
    <div className="px-3 sticky top-0 h-12 flex items-center z-50 border-1 border-gray-200 bg-blue-900 lg:bg-transparent">
      <div className="w-full text-gray-100 lg:hidden tracking-widest">
        大丸白衣 WEB在庫
      </div>
      <div className="w-full hidden lg:flex gap-3 justify-end mx-3">
        <div className="flex gap-3 text-xs text-gray-800">
          {isAuthority && (
            <>
              <Link href="/csv-bulk-register">
                <button>在庫登録</button>
              </Link>
              <Link href="/admin">
                <button>権限管理</button>
              </Link>
            </>
          )}
          {auth?.currentUser?.uid && (
            <button
              className="flex items-center text-gray-800 text-xs"
              onClick={signOutHandler}
            >
              ログアウト
            </button>
          )}
        </div>
        <div></div>
      </div>
      <HeaderDrawer />
    </div>
  )
}
