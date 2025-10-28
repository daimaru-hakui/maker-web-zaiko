import { Suspense } from "react";
import { KarseeData } from "./KarseeData";
import { KarseeCatalogs } from "./KarseeCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Karsee() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <KarseeData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <KarseeCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
