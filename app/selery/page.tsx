import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchSeleryData } from "@/actions";
import SeleryContainer from "./SeleryContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Selery() {
  const catalogSelerySS = await fetchCatalog("WewRqYjWSLqO3tBFA5ED");
  const catalogSeleryAW = await fetchCatalog("5KOWq1BVWSgfFKr7rd14");
  const catalogIfory = await fetchCatalog("spwgfseVNbJJyhPbMuLz");
  const catalogSkitto = await fetchCatalog("sEYUXN1ERqvMPswsQQUt");

  const data = await fetchSeleryData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <SeleryContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSelerySS} />
        <Catalog catalogData={catalogSeleryAW} />
        <Catalog catalogData={catalogIfory} />
        <Catalog catalogData={catalogSkitto} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
