import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/Spinner"
import { DataFetcher } from "@/components/DataFetcher"
import { SowaContainer } from "./SowaContainer"
import { fetchSowaData } from "@/actions"

export default async function Sowa() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DataFetcher fetcher={fetchSowaData}>
          {({ data }) => <SowaContainer data={data} />}
        </DataFetcher>
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "zJfBVi74zH0NrwAetdWk",
          "sUJP9HASAZ4u0vJuOAES",
          "msBGA95EgBvNqO0RTif7",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
