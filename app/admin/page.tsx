import React from "react"
import { AdminTable } from "./admin-table"

const AdminPage = () => {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex flex-col items-center justify-between overflow-hidden">
      <div className="mt-6">権限管理</div>
      <AdminTable />
    </main>
  )
}

export default AdminPage
