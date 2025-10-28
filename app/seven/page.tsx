import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { SevenData } from "./SevenData"
import { Spinner } from "@chakra-ui/react"

export default async function Seven() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <SevenData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "WvFRIqLAAkaolED0ZLYW",
          "gpiS5mf8gHkDNWGtwINs",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
