import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import { authGuard, fetchCocosData } from "@/actions";
import CocosContainer from "./CocosContainer";

export default async function Daimaru() {
  // await authGuard("cocos");
  const catalogSs = await getCatalog("p5mstnm-6");
  const catalogAw = await getCatalog("tfakmhtz9");
  const catalogDi = await getCatalog("16pjpoo8eoad");
  const catalogGu = await getCatalog("nez60e1bcl");
  const catalogVo = await getCatalog("mmd1wtjfc");

  const data = await fetchCocosData();
  if (!data) return null;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <CocosContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSs} />
        <Catalog catalogData={catalogAw} />
        <Catalog catalogData={catalogDi} />
        <Catalog catalogData={catalogGu} />
        <Catalog catalogData={catalogVo} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";