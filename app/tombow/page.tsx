import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { TombowData } from "./TombowData"
import { Spinner } from "@chakra-ui/react"

export default async function Tombow() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <TombowData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "kXfJfnnmLX9G8HKooxfh",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
