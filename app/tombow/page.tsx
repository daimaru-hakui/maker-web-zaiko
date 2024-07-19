import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import { fetchTombowData } from "@/actions";
import TombowContainer from "./TombowContainer";

export default async function Tombow() {
  const catalog = await getCatalog("pecptt28f");

  const data = await fetchTombowData();
  if (!data) return null;

  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <TombowContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalog} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
