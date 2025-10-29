"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { AitozTable } from "./AitozTable"
import { Aitoz } from "@prisma/client"

type Props = {
  data: Aitoz[]
}

export function AitozContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="Aitoz"
      permission="aitoz"
      TableComponent={AitozTable}
    />
  )
}
