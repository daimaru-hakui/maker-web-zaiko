import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchBonmaxData } from "@/actions";
import BonmaxContainer from "./BonmaxContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Bonmax() {
  const catalogFaceMix = await fetchCatalog("9SLwq2qZoyKbd5I2P8e7");
  const catalogOfficeSS = await fetchCatalog("8ArV4YXQAqjt2kzR51ba");
  const catalogOfficeAW = await fetchCatalog("qX6glfiqR1ERN9KdTUPr");
  const catalogLifemax = await fetchCatalog("OXoNg7NJijWKhOBwEJDc");
  const catalogRocky = await fetchCatalog("eMPmB5qaUr1LEDhMcEmz");
  const catalogCare = await fetchCatalog("RwVPppq1pnArvJamqQIK");
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
        <Catalog catalogData={catalogCare} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
