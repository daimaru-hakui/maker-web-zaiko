import { Suspense } from "react";
import { ChitoseData } from "./ChitoseData";
import { ChitoseCatalogs } from "./ChitoseCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Chitose() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <ChitoseData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <ChitoseCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
