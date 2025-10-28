import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { AitozData } from "./AitosData"
import { Spinner } from "@chakra-ui/react"

export default async function AitozPage() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <AitozData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "Z2uVd0KN2cYzUXGmJutO",
          "CXyrNHzyDARuicPKEC3P",
          "ixQ2b1bVQjbchn7ZsTzD",
          "WC02y2lIBIfIft94mraK",
          "QbLpw0PYZFZPBXlrXgRK",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
