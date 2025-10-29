"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { TombowTable } from "./TombowTable"
import { Tombow } from "@prisma/client"

type Props = {
  data: Tombow[]
}

export function TombowContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="Kiraku"
      TableComponent={TombowTable}
      permission="tombow"
    />
  )
}
