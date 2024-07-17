import React from "react";
import { SidebarList } from "./SidebarList";
import SidebarTitle from "./SidebarTitle";

export default function SideNav() {
  return (
    <div
      className="min-w-[calc(250px)] bg-blue-900 hidden lg:block"
      style={{
        minHeight: "calc(100vh)",
        boxShadow: "1px 0 5px 2px rgba(0,0,0,0.2)",
      }}
    >
      <div className="sticky top-0 ">
        <div className="px-5 py-3 text-lg text-white">大丸白衣 WEB在庫</div>
        <div className="flex flex-col gap-1 px-3 mt-3 text-white">
          <SidebarTitle />
          <SidebarList />
        </div>
      </div>
    </div>
  );
}