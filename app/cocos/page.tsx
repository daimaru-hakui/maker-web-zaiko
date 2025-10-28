import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { CocosData } from "./CocosData"
import { Spinner } from "@chakra-ui/react"

export default async function Cocos() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <CocosData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "TmMD6uV45chHk4Wbv9tu",
          "7Fqh15qIj4MgfefTDthH",
          "a8WkXgDPhg78FTIYrwfD",
          "YIhkXPA5GB9rnf4ewGzx",
          "QVcAdPI9cTwOmr53caYG",
          "fCYu57Bqw9kyltgdeHeZ",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
