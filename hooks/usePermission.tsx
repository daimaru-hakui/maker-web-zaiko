"use client"
import { useAuth } from "@/context/auth"
import { db } from "../lib/firebase/client"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function usePermission(maker: string) {
  const router = useRouter()
  const auth = useAuth()
  const [isAuth, setIsAuth] = useState(true)

  useEffect(() => {
    const uid = auth?.currentUser?.uid
    const getUid = async () => {
      if (!uid) return
      try {
        const makerRef = doc(db, "users", uid, "permissions", "makers")
        const snapshot = await getDoc(makerRef)
        const obj = { ...snapshot.data() }
        setIsAuth(obj[maker])
        if (!obj[maker]) {
          router.push("/login")
        }
      } catch (error) {
        console.error("Permission check failed:", error)
        setIsAuth(false)
      }
    }
    getUid()
  }, [maker, router])
  return {
    isAuth,
  }
}
