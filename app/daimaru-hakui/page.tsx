import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalog } from "@/utils/fetch-catalog";
import DaimaruContainer from "./DaimaruContainer";
import { fetchDaimaruHakuiData } from "@/actions/fetch-actions";

export default async function DaimaruHakui() {
  const catalog1 = await fetchCatalog("yqxPX84YU0GtsrdV4V2p");
  const catalog2 = await fetchCatalog("eoJbRgxhII9FWCQYh1OH");

  const data = await fetchDaimaruHakuiData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <DaimaruContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalog1} />
        <Catalog catalogData={catalog2} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
