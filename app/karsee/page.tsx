import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { KarseeData } from "./KarseeData"
import { Spinner } from "@chakra-ui/react"

export default async function Karsee() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <KarseeData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "YMY0LQM2nRWDj5gqlryN",
          "UfT9LR5z0C9qQE5vmhjE",
          "pMKHzEz4h0YPX0CGxdOW",
          "YZKfbZG9URgiEWupYZo8",
          "gQpNxvRO7YNTfCIyhlv9",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
