import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { Spinner } from "@chakra-ui/react"
import { FetchDataComp } from "@/components/FetchDataComp"
import AitozContainer from "./AitozContainer"
import { fetchAitozData } from "@/actions"

export default async function AitozPage() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <FetchDataComp fetcher={fetchAitozData}>
          {({ data }) => <AitozContainer data={data} />}
        </FetchDataComp>
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
