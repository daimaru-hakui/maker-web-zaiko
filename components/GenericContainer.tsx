"use client"
import React, { useEffect } from "react"
import { FilterInput } from "@/components/FilterInput"
import { useFilterInput } from "@/hooks/useFilterInput"
import { usePermission } from "@/hooks/usePermission"
import { useRouter } from "next/navigation"

interface Props<T> {
  data: T[]
  title: string
  permission: string
  TableComponent?: React.ComponentType<T | any>
}

export function GenericContainer<T extends Record<string, any>>({
  data,
  title,
  permission,
  TableComponent,
}: Props<T>) {
  const {
    addFilteredData,
    selectedData,
    setSelectedData,
    getUniqueProductNumbers,
  } = useFilterInput<T>()
  const datalist = getUniqueProductNumbers(data)

  const router = useRouter()
  const { isAuth } = usePermission(permission)

  useEffect(() => {
    if (permission && !isAuth) {
      router.push("/login")
    }
  }, [permission, isAuth, router])

  return (
    <div className="flex flex-col items-center w-full">
      <FilterInput<T>
        title={title}
        onSetSelectedData={setSelectedData}
        productNumberList={datalist}
        onAddFilteredData={addFilteredData}
        allData={data}
      />
      {TableComponent && <TableComponent filterData={selectedData} />}
    </div>
  )
}
