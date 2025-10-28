import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import QueryProvider from "@/lib/providers/queryProvider"
import SideNav from "@/components/layout/SideNav"
import { ChakuraProvider } from "@/lib/providers/ChakuraProvider"
import { Kosugi, Oswald } from "next/font/google"
import { AuthProvider } from "@/context/auth"

const metadata = {
  title: "大丸白衣　メーカー在庫",
  description: "大丸白衣　メーカー在庫",
}

const oswaldFont = Oswald({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={oswaldFont.className}>
      <title>大丸白衣　メーカー在庫</title>
      <body
        style={{ backgroundColor: "#f7f7f7" }}
        className="relative w-full min-h-screen flex"
      >
        <AuthProvider>
          <ChakuraProvider>
            <SideNav />
            <div className="w-full flex flex-col justify-between">
              <div>
                <Header />
                <QueryProvider>{children}</QueryProvider>
              </div>
              <Footer />
            </div>
          </ChakuraProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
