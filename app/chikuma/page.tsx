import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { ChikumaContainer } from "./ChikumaContainer"
import { fetchChikumaData } from "@/actions"

export default async function Chikuma() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchChikumaData}>
          {({ data }) => <ChikumaContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "b7440yI1Wly8MiGXlaxO",
          "mXFnlH6zLsSqmcTLVtDN",
          "6g8Gzr9UThIKFllkthx5",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
