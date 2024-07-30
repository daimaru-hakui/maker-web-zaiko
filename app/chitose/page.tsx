import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchChitoseData } from "@/actions";
import ChitoseContainer from "./ChitoseContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Chitose() {
  const catalogUnite = await fetchCatalog("ZOEYHdjkHBxGd2RJev0X");
  const catalogCalala = await fetchCatalog("ABDLfFC7MTatFAiL4D4T");
  const catalogArbe = await fetchCatalog("SL9t3boTeHtv21rbCDoQ");

  const data = await fetchChitoseData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ChitoseContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogUnite} />
        <Catalog catalogData={catalogCalala} />
        <Catalog catalogData={catalogArbe} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
