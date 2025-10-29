"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { SowaTable } from "./SowaTable"
import { Sowa } from "@prisma/client"

type Props = {
  data: Sowa[]
}

export function SowaContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="Sowa"
      permission="sowa"
      TableComponent={SowaTable}
    />
  )
}