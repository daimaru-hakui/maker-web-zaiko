import { Suspense } from "react";
import { JoieData } from "./JoieData";
import { JoieCatalogs } from "./JoieCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Joie() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <JoieData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <JoieCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
