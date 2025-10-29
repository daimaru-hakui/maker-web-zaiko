"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { SeleryTable } from "./SeleryTable"
import { Selery } from "@prisma/client"

type Props = {
  data: Selery[]
}

export function SeleryContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="Selery / ifory / SKITTO"
      permission="selery"
      TableComponent={SeleryTable}
    />
  )
}