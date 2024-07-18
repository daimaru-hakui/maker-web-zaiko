import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import {  fetchSeleryData } from "@/actions";
import SeleryContainer from "./SeleryContainer";

export default async function Selery() {
  // await authGuard("selery");
  const catalogSelerySS = await getCatalog("yrwob4gte");
  const catalogSeleryAW = await getCatalog("gxs3ov-pq");
  const catalogIfory = await getCatalog("8-8jzhxmy");
  const catalogSkitto = await getCatalog("o74ob5ld5");

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