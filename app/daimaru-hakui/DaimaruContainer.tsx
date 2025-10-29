"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { DaimaruTable } from "./DaimaruTable"
import { DaimaruHakui } from "@prisma/client"

type Props = {
  data: DaimaruHakui[]
}

export function DaimaruContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="大丸白衣"
      permission="daimaru-hakui"
      TableComponent={DaimaruTable}
    />
  )
}
