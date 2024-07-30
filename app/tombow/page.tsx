import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchTombowData } from "@/actions";
import TombowContainer from "./TombowContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Tombow() {
  const catalog = await fetchCatalog("kXfJfnnmLX9G8HKooxfh")

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
