import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { SeleryData } from "./SeleryData"
import { Spinner } from "@chakra-ui/react"

export default async function Selery() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <SeleryData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "WewRqYjWSLqO3tBFA5ED",
          "5KOWq1BVWSgfFKr7rd14",
          "spwgfseVNbJJyhPbMuLz",
          "sEYUXN1ERqvMPswsQQUt",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
