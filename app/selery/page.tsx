import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { SeleryContainer } from "./SeleryContainer"
import { fetchSeleryData } from "@/actions"

export default async function Selery() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchSeleryData}>
          {({ data }) => <SeleryContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "WewRqYjWSLqO3tBFA5ED",
          "5KOWq1BVWSgfFKr7rd14",
          "spwgfseVNbJJyhPbMuLz",
          "sEYUXN1ERqvMPswsQQUt",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
