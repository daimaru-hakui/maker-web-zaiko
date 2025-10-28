import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchSevenData } from "@/actions";
import SevenContainer from "./SevenContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Seven() {
  const catalogSeven = await fetchCatalog("WvFRIqLAAkaolED0ZLYW");
  const catalogHakui = await fetchCatalog("gpiS5mf8gHkDNWGtwINs");

  const data = await fetchSevenData();
  if (!data) return null;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <SevenContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSeven} />
        <Catalog catalogData={catalogHakui} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
