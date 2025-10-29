"use client"
import { db } from "@/lib/firebase/client"
import { doc, onSnapshot } from "firebase/firestore"
import { FC, useEffect, useState } from "react"
import { AdminTableTd } from "./admin-table-td"
import { makerLinks } from "@/utils/makerLinks"

type Props = {
  user: {
    uid: string
    email: string
  }
  index: number
}

export type Maker = {
  daimaru: boolean
  tombow: boolean
  bonmax: boolean
  burtle: boolean
  chikuma: boolean
  chitose: boolean
  karsee: boolean
  joie: boolean
  selery: boolean
  servo: boolean
  seven: boolean
  cocos: boolean
  aitoz: boolean
  yagi: boolean
  toms: boolean
}

export const AdminTableRow: FC<Props> = ({ user: { uid, email }, index }) => {
  const [makers, setMakers] = useState<any[]>()

  useEffect(() => {
    if (!uid) return
    const makerDoc = doc(db, "users", uid, "permissions", "makers")
    const unsubscribe = onSnapshot(
      makerDoc,
      (snapshot) => {
        if (snapshot.exists()) {
          setMakers(Object.entries({ ...snapshot.data() } as Maker))
        }
      },
      (error) => {
        console.error("Error fetching makers:", error)
      },
    )
    return () => unsubscribe()
  }, [uid])

  return (
    <tr
      key={uid}
      className={`border-b hover:bg-gray-50  ${index % 2 === 0 ? "bg-gray-100 hover:bg-gray-200" : ""}`}
    >
      <td className="px-4 py-2 min-w-[250px]">{email}</td>
      {makerLinks.map((maker) => {
        const target = makers?.find((m) => m[0] == maker.title)
        return (
          <AdminTableTd
            key={maker.label}
            uid={uid}
            title={maker.title}
            isMaker={target ? target[1] : false}
          />
        )
      })}
    </tr>
  )
}
