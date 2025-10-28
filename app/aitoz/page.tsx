import { AitosCatalgs } from "./AitosCatalogs"
import { Suspense } from "react"
import { AitozData } from "./AitosData"
import { Spinner } from "@chakra-ui/react"

export default async function AitozPage() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <AitozData />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <AitosCatalgs />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
