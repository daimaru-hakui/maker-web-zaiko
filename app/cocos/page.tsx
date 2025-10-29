import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { CocosContainer } from "./CocosContainer"
import { fetchCocosData } from "@/actions"

export default async function Cocos() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchCocosData}>
          {({ data }) => <CocosContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "TmMD6uV45chHk4Wbv9tu",
          "7Fqh15qIj4MgfefTDthH",
          "a8WkXgDPhg78FTIYrwfD",
          "YIhkXPA5GB9rnf4ewGzx",
          "QVcAdPI9cTwOmr53caYG",
          "fCYu57Bqw9kyltgdeHeZ",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
