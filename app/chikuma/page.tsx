import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { ChikumaData } from "./ChikumaData"
import { Spinner } from "@chakra-ui/react"

export default async function Chikuma() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <ChikumaData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "b7440yI1Wly8MiGXlaxO",
          "mXFnlH6zLsSqmcTLVtDN",
          "6g8Gzr9UThIKFllkthx5",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
