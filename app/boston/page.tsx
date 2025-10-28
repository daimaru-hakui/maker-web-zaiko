import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { BostonData } from "./BostonData"
import { Spinner } from "@chakra-ui/react"

export default async function Boston() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <BostonData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "TwK33iXeZJQa3thFGHtE",
          "jwaznJWerd3N6JWUeZss",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
