"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { ChitoseTable } from "./ChitoseTable"
import { Chitose } from "@prisma/client"

type Props = {
  data: Chitose[]
}

export function ChitoseContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="arbe / Unite"
      permission="chitose"
      TableComponent={ChitoseTable}
    />
  )
}