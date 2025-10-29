"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { KarseeTable } from "./KarseeTable"
import { Karsee } from "@prisma/client"

type Props = {
  data: Karsee[]
}

export function KarseeContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="Karsee"
      permission="karsee"
      TableComponent={KarseeTable}
    />
  )
}