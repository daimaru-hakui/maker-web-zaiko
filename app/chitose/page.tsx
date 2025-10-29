import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { ChitoseContainer } from "./ChitoseContainer"
import { fetchChitoseData } from "@/actions"

export default async function Chitose() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchChitoseData}>
          {({ data }) => <ChitoseContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "ZOEYHdjkHBxGd2RJev0X",
          "ABDLfFC7MTatFAiL4D4T",
          "SL9t3boTeHtv21rbCDoQ",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
