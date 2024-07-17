import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/functions/get-catalog";
import { authGuard, fetchChikumaData } from "@/actions";
import ChikumaContainer from "./ChikumaContainer";


export default async function Chikuma() {
  // await authGuard("chikuma");
  const catalogSS = await getCatalog("easbbej1r");
  const catalogAW = await getCatalog("8twgzvvvs");
  const catalogFL = await getCatalog("1hfh1ntic");

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