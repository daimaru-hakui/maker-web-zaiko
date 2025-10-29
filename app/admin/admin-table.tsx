"use client"
import TableArea from "@/components/table-area"
import { db } from "@/lib/firebase/client"
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { AdminTableRow } from "./admin-table-row"
import { makerLinks } from "@/utils/makerLinks"

type User = {
  uid: string
  email: string
}

export const AdminTable = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const usersRef = collection(db, "users")
    const unsubscribe = onSnapshot(
      usersRef,
      (snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id }) as User),
        )
      },
      (error) => {
        console.error("Error fetching users:", error)
      },
    )
    return () => unsubscribe()
  }, [])

  return (
    <TableArea maxW="1000px" className="w-full">
      <thead className="sticky top-0 z-10 bg-white h-12">
        <tr>
          <th className="p-0 px-2 text-left font-semibold text-gray-700">
            email
          </th>
          {makerLinks.map((maker) => (
            <th
              className="text-center p-0 px-2 min-w-[80px] font-semibold text-gray-700"
              key={maker.label}
            >
              {maker.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <AdminTableRow key={user.uid} index={index} user={user} />
        ))}
      </tbody>
    </TableArea>
  )
}
