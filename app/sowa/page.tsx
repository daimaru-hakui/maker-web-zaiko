import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalog } from "@/utils/fetch-catalog";
import SowaContainer from "./SowaContainer";
import { fetchSowaData } from "@/actions/fetch-actions";

export default async function Sowa() {
  const catalogSS = await fetchCatalog("zJfBVi74zH0NrwAetdWk");
  const catalogAW = await fetchCatalog("sUJP9HASAZ4u0vJuOAES");
  const catalogEF = await fetchCatalog("msBGA95EgBvNqO0RTif7");

  const data = await fetchSowaData();
  if (!data) return null;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <SowaContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSS} />
        <Catalog catalogData={catalogAW} />
        <Catalog catalogData={catalogEF} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
