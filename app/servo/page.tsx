import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchServoData } from "@/actions";
import ServoContainer from "./SevenContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Servo() {
  const catalogServo = await fetchCatalog("3PSm4sRFWrc83Z588Mmi");
  const catalogFood = await fetchCatalog("HdeSEUh9pa9ACZzO4BEi");
  const catalogMedical = await fetchCatalog("5O0l7oJ0HHDd58bWa3gO");
  const catalogGrowSS = await fetchCatalog("nTHFMlkdQZ1vjHBNcnfQ");
  const catalogGrowAW = await fetchCatalog("kyiYg6k43OrLZ1Ok3Quc");
  const catalogLand = await fetchCatalog("x3oUUc4lBk4Jerr7mvEK");

  const data = await fetchServoData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ServoContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogServo} />
        <Catalog catalogData={catalogFood} />
        <Catalog catalogData={catalogMedical} />
        <Catalog catalogData={catalogGrowSS} />
        <Catalog catalogData={catalogGrowAW} />
        <Catalog catalogData={catalogLand} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
