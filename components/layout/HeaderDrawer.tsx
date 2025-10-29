"use client"
import React, { useState } from "react"
import Link from "next/link"
import { IoMenu, IoClose } from "react-icons/io5"
import { SidebarList } from "./SidebarList"
import { useAuth } from "@/context/auth"
import { useRouter } from "next/navigation"

export const HeaderDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const auth = useAuth()

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const signOutHandler = async () => {
    await auth?.logout()
    router.refresh()
  }

  return (
    <>
      <div className="w-full flex justify-end lg:hidden">
        <IoMenu
          onClick={onOpen}
          color="white"
          size="24px"
          className="cursor-pointer"
        />
      </div>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-64 bg-white z-50 shadow-lg overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <IoClose size="24px" />
            </button>

            {/* Header */}
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>

            {/* Body */}
            <div className="p-4 text-black">
              <SidebarList onClose={onClose} />
              <div className="flex flex-col gap-2 mt-3">
                <Link
                  href="https://catalog.myuni.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 rounded text-sm cursor-pointer hover:text-blue-600 block"
                >
                  マイユニポータル
                </Link>
                {auth?.currentUser?.uid && (
                  <button
                    onClick={signOutHandler}
                    className="px-4 py-2 border border-gray-300 rounded text-sm cursor-pointer hover:text-blue-600 text-left w-full"
                  >
                    ログアウト
                  </button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full border-t p-4">
              <button
                onClick={onClose}
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm hover:text-blue-600"
              >
                閉じる
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
