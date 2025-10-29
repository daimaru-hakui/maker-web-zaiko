import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { DataFetcher } from "@/components/DataFetcher"
import { fetchAitozData } from "@/actions"
import { AitozContainer } from "./AitozContainer"
import Spinner from "@/components/Spinner"

export default async function AitozPage() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <DataFetcher fetcher={fetchAitozData}>
          {({ data }) => <AitozContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs
          ids={[
            "Z2uVd0KN2cYzUXGmJutO",
            "CXyrNHzyDARuicPKEC3P",
            "ixQ2b1bVQjbchn7ZsTzD",
            "WC02y2lIBIfIft94mraK",
            "QbLpw0PYZFZPBXlrXgRK",
          ]}
        />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
