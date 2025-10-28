import { auth } from "@/lib/firebase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const getVerifiedToken = async (authToken?: string) => {
  let token

  if (authToken) {
    token = authToken
  } else {
    const cookieStore = await cookies()
    token = cookieStore.get("firebaseAuthToken")?.value
  }

  if (!token) {
    return null
  }

  try {
    const verifiedToken = await auth.verifyIdToken(token)
    return verifiedToken
  } catch (error) {
    console.error("Tokenがありません:", error)
    redirect("/login")
    return null // リダイレクト後は実行されないが、型の整合性のために null を返す
  }
}
