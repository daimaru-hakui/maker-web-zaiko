import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { YagiContainer } from "./YagiContainer"
import { fetchYagiData } from "@/actions"

export default async function Yagi() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchYagiData}>
          {({ data }) => <YagiContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "57vRlgjEa8gMZN8ZxZPk",
          "3vuLDSblesVu3sEUwnWY",
          "R2z8zxSTfijJ9y3TZt9A",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
