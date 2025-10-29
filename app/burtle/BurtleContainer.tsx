"use client"
import { GenericContainer } from "@/components/GenericContainer"
import { BurtleTable } from "./BurtleTable"
import { Burtle } from "@prisma/client"

type Props = {
  data: Burtle[]
}

export function BurtleContainer({ data }: Props) {
  return (
    <GenericContainer
      data={data}
      title="Burtle"
      permission="burtle"
      TableComponent={BurtleTable}
    />
  )
}