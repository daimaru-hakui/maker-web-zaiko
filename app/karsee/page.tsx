import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import { fetchKarseeData } from "@/actions";
import KarseeContainer from "./KarseeContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Karsee() {
  const catalogEnjoySS = await fetchCatalog("YMY0LQM2nRWDj5gqlryN");
  const catalogEnjoyAW = await fetchCatalog("UfT9LR5z0C9qQE5vmhjE");
  const catalogNoir = await fetchCatalog("pMKHzEz4h0YPX0CGxdOW");
  const catalogCarean = await fetchCatalog("YZKfbZG9URgiEWupYZo8");
  const catalogHeartGreen = await fetchCatalog("gQpNxvRO7YNTfCIyhlv9");
  
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
