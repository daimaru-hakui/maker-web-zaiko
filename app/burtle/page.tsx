import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/functions/get-catalog";
import { authGuard, fetchBurtleData } from "@/actions";
import BurtleContainer from "./BurtleContainer";

export default async function Burtle() {
  // await authGuard("burtle");
  const catalogSS = await getCatalog("jcmvlxis8");
  const catalogAW = await getCatalog("hy4k0eb2b5");
  const data = await fetchBurtleData();

  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <BurtleContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSS} />
        <Catalog catalogData={catalogAW} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";