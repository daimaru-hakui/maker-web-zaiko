import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { ServoContainer } from "./ServoContainer"
import { fetchServoData } from "@/actions"

export default async function Servo() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchServoData}>
          {({ data }) => <ServoContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "3PSm4sRFWrc83Z588Mmi",
          "HdeSEUh9pa9ACZzO4BEi",
          "5O0l7oJ0HHDd58bWa3gO",
          "nTHFMlkdQZ1vjHBNcnfQ",
          "kyiYg6k43OrLZ1Ok3Quc",
          "x3oUUc4lBk4Jerr7mvEK",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
