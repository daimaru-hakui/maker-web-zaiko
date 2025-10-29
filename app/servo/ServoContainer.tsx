"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { ServoTable } from "./ServoTable"
import { Servo } from "@prisma/client"

type Props = {
  data: Servo[]
}

export function ServoContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="Servo"
      permission="servo"
      TableComponent={ServoTable}
    />
  )
}