import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decodeJwt } from "jose"

const PUBLIC_PATHS = [
  "/login",
  "/forgot-password",
  "/signup-register",
  "/signup/bulk",
]

export async function updateSession(request: NextRequest) {
  const cookieStore = await cookies()
  const token = cookieStore.get("firebaseAuthToken")?.value

  const { pathname } = request.nextUrl

  // ログイン不要ページ
  if (!token && PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // トークンありでログインページにアクセス
  if (token && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // トークンがない場合はログインページへリダイレクト
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  const decodedToken = decodeJwt(token)

  // トークンの有効期限チェック
  const tokenExp = decodedToken.exp ? decodedToken.exp * 1000 : 0
  const now = Date.now()
  const fiveMinutesInMs = 5 * 60 * 1000
  const isTokenExpiringSoon = tokenExp - now < fiveMinutesInMs

  if (decodedToken.exp && isTokenExpiringSoon) {
    const url = `/api/refresh-token?redirect=${encodeURIComponent(pathname)}`
    return NextResponse.redirect(new URL(url, request.url))
  }

  // トークン有効 → リクエストを通す
  return NextResponse.next()
}
