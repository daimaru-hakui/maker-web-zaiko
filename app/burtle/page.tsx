import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchBurtleData } from "@/actions";
import BurtleContainer from "./BurtleContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Burtle() {
  const catalogSS = await fetchCatalog("clNRdfRwPcvYuBOdn0Ez");
  const catalogAW = await fetchCatalog("9B6TCiCF2CpCEiOVi7Km");
  const data = await fetchBurtleData();

  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <BurtleContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSS} />
        <Catalog catalogData={catalogAW} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
