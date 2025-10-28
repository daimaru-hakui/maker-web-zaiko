"use server"

interface User {
  email: string
  role: string
}

import { db } from "@/lib/firebase/server"
import { redirect } from "next/navigation"
import { getVerifiedToken } from "./get-verified-token"

export async function authGuard(): Promise<void> {
  const verifiedToken = await getVerifiedToken()
  if (!verifiedToken) {
    redirect("/login")
  }

  const makerRef = db.collection("users").doc(verifiedToken.uid)

  const makerSnap = await makerRef.get()
  const data = { ...(makerSnap.data() as User) }
  if (data.role !== "admin" && data.role !== "member") {
    redirect("/login")
  }
}
