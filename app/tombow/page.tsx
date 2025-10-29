import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { TombowContainer } from "./TombowContainer"
import { fetchTombowData } from "@/actions"

export default async function Tombow() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchTombowData}>
          {({ data }) => <TombowContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "kXfJfnnmLX9G8HKooxfh",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
