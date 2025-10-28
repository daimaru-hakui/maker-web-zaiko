import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { JoieData } from "./JoieData"
import { Spinner } from "@chakra-ui/react"

export default async function Joie() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <JoieData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "tHct8wrii7FBF8ssRIbW",
          "EGLLipaquXFGYXPt8fIz",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
