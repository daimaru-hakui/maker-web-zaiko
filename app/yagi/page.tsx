import { Suspense } from "react";
import { YagiData } from "./YagiData";
import { YagiCatalogs } from "./YagiCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Yagi() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <YagiData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <YagiCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
