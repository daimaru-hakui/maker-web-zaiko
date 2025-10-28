import { Suspense } from "react";
import { ServoData } from "./ServoData";
import { ServoCatalogs } from "./ServoCatalogs";
import { Spinner } from "@chakra-ui/react";

export default async function Servo() {
  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <ServoData />
      </Suspense>
      <Suspense fallback={<div>Loading catalogs...</div>}>
        <ServoCatalogs />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-static";
