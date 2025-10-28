import { Catalogs } from "@/components/Catalogs"
import { Suspense } from "react"
import { BonmaxData } from "./BonmaxData"
import { Spinner } from "@chakra-ui/react"

export default async function Bonmax() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <BonmaxData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <Catalogs ids={[
          "9SLwq2qZoyKbd5I2P8e7",
          "8ArV4YXQAqjt2kzR51ba",
          "qX6glfiqR1ERN9KdTUPr",
          "OXoNg7NJijWKhOBwEJDc",
          "eMPmB5qaUr1LEDhMcEmz",
          "RwVPppq1pnArvJamqQIK",
        ]} />
      </Suspense>
    </main>
  )
}

export const dynamic = "force-static"
