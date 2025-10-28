import { Suspense } from "react";
import { SeleryData } from "./SeleryData";
import { SeleryCatalogs } from "./SeleryCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Selery() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <SeleryData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <SeleryCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
