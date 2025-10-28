import { Suspense } from "react";
import { BonmaxData } from "./BonmaxData";
import { BonmaxCatalogs } from "./BonmaxCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Bonmax() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <BonmaxData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <BonmaxCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
