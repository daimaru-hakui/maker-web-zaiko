import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { BostonContainer } from "./BostonContainer"
import { fetchBostonData } from "@/actions"

export default async function Boston() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchBostonData}>
          {({ data }) => <BostonContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "TwK33iXeZJQa3thFGHtE",
          "jwaznJWerd3N6JWUeZss",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
