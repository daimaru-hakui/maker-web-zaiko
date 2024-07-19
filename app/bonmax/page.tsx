import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import { fetchBonmaxData } from "@/actions";
import BonmaxContainer from "./BonmaxContainer";

export default async function Bonmax() {
  // await authGuard("bonmax");
  const catalogFaceMix = await getCatalog("lh4sypndh");
  const catalogOfficeSS = await getCatalog("vcxclo8y7");
  const catalogOfficeAW = await getCatalog("kt05evuki");
  const catalogLifemax = await getCatalog("qx2zikli7");
  const catalogRocky = await getCatalog("vlatytlxs");
  const data = await fetchBonmaxData();

  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <BonmaxContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogFaceMix} />
        <Catalog catalogData={catalogOfficeSS} />
        <Catalog catalogData={catalogOfficeAW} />
        <Catalog catalogData={catalogLifemax} />
        <Catalog catalogData={catalogRocky} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
