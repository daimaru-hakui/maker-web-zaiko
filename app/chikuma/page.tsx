import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchChikumaData } from "@/actions";
import ChikumaContainer from "./ChikumaContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Chikuma() {
  const catalogSS = await fetchCatalog("b7440yI1Wly8MiGXlaxO");
  const catalogAW = await fetchCatalog("mXFnlH6zLsSqmcTLVtDN");
  const catalogFL = await fetchCatalog("6g8Gzr9UThIKFllkthx5");

  const data = await fetchChikumaData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ChikumaContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSS} />
        <Catalog catalogData={catalogAW} />
        <Catalog catalogData={catalogFL} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
