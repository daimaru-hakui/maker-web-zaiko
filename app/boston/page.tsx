import { Suspense } from "react";
import { BostonData } from "./BostonData";
import { BostonCatalogs } from "./BostonCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Boston() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <BostonData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <BostonCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
