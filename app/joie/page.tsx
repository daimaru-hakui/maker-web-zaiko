import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/functions/get-catalog";
import { authGuard, fetchJoieData } from "@/actions";
import JoieContainer from "./JoieContainer";

export default async function Joie() {
  // await authGuard("joie");
  const catalogEnJoieSS = await getCatalog("aqz0c2_5p");
  const catalogEnJoieAW = await getCatalog("drgjd_who");

  const data = await fetchJoieData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <JoieContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogEnJoieSS} />
        <Catalog catalogData={catalogEnJoieAW} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";