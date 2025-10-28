"use client"
import React from "react"
import { SidebarList } from "./SidebarList"
import SidebarTitle from "./SidebarTitle"
import { usePathname } from "next/navigation"
import { Oswald } from "next/font/google"
import Link from "next/link"

const oswaldFont = Oswald({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
})

export default function SideNav() {
  const pathname = usePathname()
  if (pathname === "/login") {
    return null
  }

  return (
    <div
      className={`min-w-[calc(250px)] bg-blue-900 hidden lg:block`}
      style={{
        minHeight: "calc(100vh)",
        // boxShadow: "1px 0 5px 2px rgba(0,0,0,0.2)",
      }}
    >
      <div className="sticky top-0 ">
        <div
          className={`px-5 py-3 text-lg text-white tracking-widest font-semibold ${oswaldFont.className}`}
        >
          <Link href="/">大丸白衣 WEB在庫</Link>
        </div>
        <div className="flex flex-col gap-1 px-3 text-white">
          <SidebarTitle />
          <SidebarList />
        </div>
      </div>
    </div>
  )
}

