import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCocosData } from "@/actions";
import CocosContainer from "./CocosContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Daimaru() {
  const catalogSs = await fetchCatalog("TmMD6uV45chHk4Wbv9tu");
  const catalogAw = await fetchCatalog("7Fqh15qIj4MgfefTDthH");
  const catalogDiSS = await fetchCatalog("a8WkXgDPhg78FTIYrwfD");
  const catalogDiAW = await fetchCatalog("YIhkXPA5GB9rnf4ewGzx");
  const catalogGu = await fetchCatalog("QVcAdPI9cTwOmr53caYG");
  const catalogVo = await fetchCatalog("fCYu57Bqw9kyltgdeHeZ");

  const data = await fetchCocosData();
  if (!data) return null;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <CocosContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSs} />
        <Catalog catalogData={catalogAw} />
        <Catalog catalogData={catalogDiSS} />
        <Catalog catalogData={catalogDiAW} />
        <Catalog catalogData={catalogGu} />
        <Catalog catalogData={catalogVo} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
