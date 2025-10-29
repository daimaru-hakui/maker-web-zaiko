"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { YagiTable } from "./YagiTable"
import { Yagi } from "@prisma/client"

type Props = {
  data: Yagi[]
}

export function YagiContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="UNILADY / RISERVA"
      permission="yagi"
      TableComponent={YagiTable}
    />
  )
}
