import { Suspense } from "react";
import { CocosData } from "./CocosData";
import { CocosCatalogs } from "./CocosCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Cocos() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <CocosData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <CocosCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
