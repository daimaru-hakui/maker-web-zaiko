import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { SevenContainer } from "./SevenContainer"
import { fetchSevenData } from "@/actions"

export default async function Seven() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchSevenData}>
          {({ data }) => <SevenContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "WvFRIqLAAkaolED0ZLYW",
          "gpiS5mf8gHkDNWGtwINs",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
