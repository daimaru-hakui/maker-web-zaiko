"use client"
import Link from "next/link";
import React from "react";

export default function SidebarTitle() {
  return (
    <Link
      className="text-white text-sm cursor-pointer"
      href="https://myuni.vercel.app/catalog"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="w-full bg-transparent hover:bg-blue-700 text-sm text-white font-semibold hover:text-white py-1 px-4 border border-white-500 rounded">
        マイユニポータル
      </button>
    </Link>
  );
}
