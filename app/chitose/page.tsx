import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { ChitoseData } from "./ChitoseData"
import { Spinner } from "@chakra-ui/react"

export default async function Chitose() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <ChitoseData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "ZOEYHdjkHBxGd2RJev0X",
          "ABDLfFC7MTatFAiL4D4T",
          "SL9t3boTeHtv21rbCDoQ",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
