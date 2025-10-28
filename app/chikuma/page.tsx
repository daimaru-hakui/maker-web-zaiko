import { Suspense } from "react";
import { ChikumaData } from "./ChikumaData";
import { ChikumaCatalogs } from "./ChikumaCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Chikuma() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <ChikumaData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <ChikumaCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
