import { Suspense } from "react";
import { BurtleData } from "./BurtleData";
import { BurtleCatalogs } from "./BurtleCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Burtle() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <BurtleData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <BurtleCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
