import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { BurtleContainer } from "./BurtleContainer"
import { fetchBurtleData } from "@/actions"

export default async function Burtle() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchBurtleData}>
          {({ data }) => <BurtleContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "clNRdfRwPcvYuBOdn0Ez",
          "9B6TCiCF2CpCEiOVi7Km",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
