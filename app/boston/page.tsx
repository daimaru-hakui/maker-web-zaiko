import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import BostonContainer from "./BostonContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";
import { fetchBostonData } from "@/actions/fetch-actions";

export default async function Boston() {
  const catalogBonuni = await fetchCatalog("TwK33iXeZJQa3thFGHtE");
  const catalogB2 = await fetchCatalog("jwaznJWerd3N6JWUeZss");
  const data = await fetchBostonData();

  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <BostonContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogBonuni} />
        <Catalog catalogData={catalogB2} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
