import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/functions/get-catalog";
import { authGuard, fetchServoData } from "@/actions";
import ServoContainer from "./SevenContainer";

export default async function Servo() {
  await authGuard("servo");
  const catalogServo = await getCatalog("slnkyzgbe");
  const catalogFood = await getCatalog("ou46diqi9");
  const catalogMedical = await getCatalog("7k0eahxnu");
  const catalogGrowSS = await getCatalog("sgpxjslir");
  const catalogGrowAW = await getCatalog("zp_lkbf3a");
  const catalogLand = await getCatalog("abqpa4-l0");

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
export const dynamic = 'force-static';