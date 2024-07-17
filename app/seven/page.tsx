import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/functions/get-catalog";
import { authGuard, fetchSevenData } from "@/actions";
import SevenContainer from "./SevenContainer";

export default async function Seven() {
  await authGuard("seven")
  const catalogSeven = await getCatalog("2ez2taehb");
  const catalogHakui = await getCatalog("9pmnpg6ha");

  const data = await fetchSevenData()
  if (!data) return null;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <SevenContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSeven} />
        <Catalog catalogData={catalogHakui} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = 'force-static';