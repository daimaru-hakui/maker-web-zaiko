"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { ChikumaTable } from "./ChikumaTable"
import { Chikuma } from "@prisma/client"

type Props = {
  data: Chikuma[]
}

export function ChikumaContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="ALPHAPIER / FELLOWS"
      permission="chikuma"
      TableComponent={ChikumaTable}
    />
  )
}