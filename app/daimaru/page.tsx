import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import DaimaruArea from "./Daimaru-area";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Daimaru() {
  const catalog1 = await fetchCatalog("yqxPX84YU0GtsrdV4V2p")
  const catalog2 = await fetchCatalog("eoJbRgxhII9FWCQYh1OH")
  

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <DaimaruArea />
      <CatalogArea>
        <Catalog catalogData={catalog1} />
        <Catalog catalogData={catalog2} />
      </CatalogArea>
    </main>
  );
}
