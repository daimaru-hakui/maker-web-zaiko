import { Suspense } from "react";
import { TombowData } from "./TombowData";
import { TombowCatalogs } from "./TombowCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Tombow() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <TombowData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <TombowCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
