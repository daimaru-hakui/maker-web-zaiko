"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { BonmaxTable } from "./BonmaxTable"
import { Bonmax } from "@prisma/client"

type Props = {
  data: Bonmax[]
}

export function BonmaxContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="FACEMIX / BON / LIFEMAX"
      permission="bonmax"
      TableComponent={BonmaxTable}
    />
  )
}