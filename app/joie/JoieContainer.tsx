"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { JoieTable } from "./JoieTable"
import { Joie } from "@prisma/client"

type Props = {
  data: Joie[]
}

export function JoieContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="enjoie"
      permission="joie"
      TableComponent={JoieTable}
    />
  )
}