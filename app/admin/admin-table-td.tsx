"use client"
import { db } from "@/lib/firebase/client"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { FC } from "react"

type Props = {
  uid: string
  isMaker?: boolean
  title: string
}
export const AdminTableTd: FC<Props> = ({ uid, isMaker, title }) => {
  const checked = isMaker ? true : false

  const updateMaker = async () => {
    try {
      const makerDoc = doc(db, "users", uid, "permissions", "makers")
      const docSnapshot = await getDoc(makerDoc)
      if (!docSnapshot.exists()) {
        await setDoc(makerDoc, {
          [title]: !isMaker,
        })
        return
      }
      await updateDoc(makerDoc, {
        [title]: !isMaker,
      })
    } catch (error) {
      console.error("Error updating maker:", error)
    }
  }

  return (
    <td className="p-1 text-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={updateMaker}
        className="w-5 h-5 cursor-pointer accent-blue-600"
      />
    </td>
  )
}
