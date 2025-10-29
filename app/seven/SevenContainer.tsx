"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { SevenTable } from "./SevenTable"
import { Seven } from "@prisma/client"

type Props = {
  data: Seven[]
}

export function SevenContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="SEVEN UNIFORM"
      permission="seven"
      TableComponent={SevenTable}
    />
  )
}