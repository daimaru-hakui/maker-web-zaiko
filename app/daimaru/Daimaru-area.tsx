"use client"
import { DaimaruTable } from "@/app/daimaru/Daimaru-table"
import React, { useEffect } from "react"
import { useFetch } from "@/hooks/useFetch"
import { DaimaruData } from "@/utils/types"
import { Flex } from "@chakra-ui/react"
import { FilterInput } from "@/components/FilterInput"
import LoadingSpinner from "@/components/spinner"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase/client"
import { useFilterInput } from "@/hooks/useFilterInput"
import { useAuth } from "@/context/auth"

const DaimaruArea = () => {
  const auth = useAuth()
  const uid = auth?.currentUser?.uid
  const { addArray, filterData, setFilterData } = useFilterInput<DaimaruData>()
  const { data }: { data: DaimaruData[] | undefined } = useFetch({
    url: "/api/daimaru",
    queryKey: "daimaru",
  })

  useEffect(() => {
    if (!uid) return
    const logsRef = collection(db, "users", uid, "AccessLogs")
    addDoc(logsRef, {
      uid: uid,
      createdAt: serverTimestamp(),
    })
  }, [uid])

  if (!data) return <LoadingSpinner />
  const newData = data.map((d) => d.品番)
  const datalist = Array.from(new Set(newData))

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="大丸白衣"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <DaimaruTable filterData={filterData} />
    </Flex>
  )
}

export default DaimaruArea
