import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchJoieData } from "@/actions";
import JoieContainer from "./JoieContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Joie() {
  const catalogEnJoieSS = await fetchCatalog("tHct8wrii7FBF8ssRIbW");
  const catalogEnJoieAW = await fetchCatalog("EGLLipaquXFGYXPt8fIz");

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
