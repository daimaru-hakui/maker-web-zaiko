import { DaimaruContainer } from "./DaimaruContainer"
import { fetchDaimaruHakuiData } from "@/actions/fetch-actions"
import { DataFetcher } from "@/components/DataFetcher"
import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"

export default async function DaimaruHakui() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <DataFetcher fetcher={fetchDaimaruHakuiData}>
        {({ data }) => <DaimaruContainer data={data} />}
      </DataFetcher>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={["yqxPX84YU0GtsrdV4V2p", "eoJbRgxhII9FWCQYh1OH"]} />
      </Suspense>
    </main>
  )
}
export const dynamic = "force-static"
