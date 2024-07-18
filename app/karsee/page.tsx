import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import { authGuard, fetchKarseeData } from "@/actions";
import KarseeContainer from "./KarseeContainer";

export default async function Karsee() {
  // await authGuard("karsee");
  const catalogEnjoySS = await getCatalog("cgczlza8z");
  const catalogEnjoyAW = await getCatalog("53qaflfz1");
  const catalogNoir = await getCatalog("avp-i33uhr");
  const catalogCarean = await getCatalog("f653gvyki");
  const catalogHeartGreen = await getCatalog("ppud4o2fi");

  const data = await fetchKarseeData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <KarseeContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogEnjoySS} />
        <Catalog catalogData={catalogEnjoyAW} />
        <Catalog catalogData={catalogNoir} />
        <Catalog catalogData={catalogCarean} />
        <Catalog catalogData={catalogHeartGreen} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";