import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { JoieContainer } from "./JoieContainer"
import { fetchJoieData } from "@/actions"

export default async function Joie() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchJoieData}>
          {({ data }) => <JoieContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "tHct8wrii7FBF8ssRIbW",
          "EGLLipaquXFGYXPt8fIz",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
