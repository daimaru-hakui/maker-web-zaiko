"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { BostonTable } from "./BostonTable"
import { Boston } from "@prisma/client"

type Props = {
  data: Boston[]
}

export function BostonContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="BONUNI"
      permission="boston"
      TableComponent={BostonTable}
    />
  )
}
