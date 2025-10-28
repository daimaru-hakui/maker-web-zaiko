import { Suspense } from "react";
import { SowaData } from "./SowaData";
import { SowaCatalogs } from "./SowaCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Sowa() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <SowaData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <SowaCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
