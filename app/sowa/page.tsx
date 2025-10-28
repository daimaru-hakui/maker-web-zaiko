import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { SowaData } from "./SowaData"
import { Spinner } from "@chakra-ui/react"

export default async function Sowa() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <SowaData />
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
