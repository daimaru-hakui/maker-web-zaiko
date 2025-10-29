import { db } from "@/lib/firebase/client"
import { doc, onSnapshot } from "firebase/firestore"
import { FC, useEffect, useState } from "react"
import { SidebarItem } from "./SidebarItem"
import { makerLinks } from "@/utils/makerLinks"
import { useAuth } from "@/context/auth"
import { Maker } from "@/app/admin/admin-table-row"

type Props = {
  onClose?: () => void
}

export const SidebarList: FC<Props> = ({ onClose }) => {
  const auth = useAuth()
  const uid = auth?.currentUser?.uid
  const [authMakers, setAuthMakers] = useState<any>([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!uid) return
    const makersRef = doc(db, "users", uid, "permissions", "makers")
    const unsubscribe = onSnapshot(
      makersRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setAuthMakers(Object.entries({ ...snapshot.data() } as Maker))
        }
      },
      (error) => {
        console.error("Error fetching makers:", error)
      },
    )
    return () => unsubscribe()
  }, [uid])

  if (!isHydrated) {
    return <div className={`mt-3`} />
  }

  return (
    <div className={`mt-3`}>
      {makerLinks.map((maker) => {
        const obj = authMakers.find((link: any) => link[0] === maker.title)
        if (!obj || !obj[1]) return null

        return (
          <SidebarItem
            key={maker.label}
            label={maker.label}
            link={maker.link}
            blank={false}
            onClose={onClose}
          />
        )
      })}
    </div>
  )
}
