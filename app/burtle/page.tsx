import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { BurtleData } from "./BurtleData"
import { Spinner } from "@chakra-ui/react"

export default async function Burtle() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <BurtleData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "clNRdfRwPcvYuBOdn0Ez",
          "9B6TCiCF2CpCEiOVi7Km",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
