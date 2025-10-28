import { Suspense } from "react";
import { SevenData } from "./SevenData";
import { SevenCatalogs } from "./SevenCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Seven() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <SevenData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <SevenCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
