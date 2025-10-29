"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { CocosTable } from "./CocosTable"
import { Cocos } from "@prisma/client"

type Props = {
  data: Cocos[]
}

export function CocosContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="CO-COS"
      permission="cocos"
      TableComponent={CocosTable}
    />
  )
}