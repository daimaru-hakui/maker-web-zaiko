import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import DaimaruArea from "./Daimaru-area";
import { getCatalog } from "@/functions/get-catalog";

export default async function Daimaru() {
  const catalog1 = await getCatalog("liraxh-nnw");
  const catalog2 = await getCatalog("4szieql4_v");

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
