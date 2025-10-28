"use server"

import { auth } from "@/lib/firebase/server"
import { cookies } from "next/headers"

export const removeToken = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("firebaseAuthToken")?.value

  // ログアウト前にユーザーIDを取得
  let userId: string | undefined
  if (token) {
    try {
      const verifiedToken = await auth.verifyIdToken(token)
      userId = verifiedToken.uid
    } catch {
      // トークン検証失敗時はログなし
    }
  }

  cookieStore.delete("firebaseAuthToken")
  cookieStore.delete("firebaseAuthRefreshToken")
}

export const setToken = async ({
  token,
  refreshToken,
}: {
  token: string
  refreshToken: string
}) => {
  try {
    const verifiedToken = await auth.verifyIdToken(token)
    if (!verifiedToken) {
      return
    }

    const userRecord = await auth.getUser(verifiedToken.uid)
    if (
      process.env.ADMIN_EMAIL === userRecord.email &&
      userRecord.customClaims?.role !== "ADMIN"
    ) {
      await auth.setCustomUserClaims(verifiedToken.uid, { role: "ADMIN" })
    }

    if (!userRecord.customClaims?.role) {
      await auth.setCustomUserClaims(verifiedToken.uid, {
        role: "USER",
      })
    }

    const cookieStore = await cookies()
    cookieStore.set("firebaseAuthToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    })
    cookieStore.set("firebaseAuthRefreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    })
  } catch (err) {
    console.error(err)
  }
}
