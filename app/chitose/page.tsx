import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import { authGuard, fetchChitoseData } from "@/actions";
import ChitoseContainer from "./ChitoseContainer";

export default async function Chitose() {
  // await authGuard("chitose");
  const catalogUnite = await getCatalog("oxqcchhqb");
  const catalogArbe = await getCatalog("ekpj9zvfm");

  const data = await fetchChitoseData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ChitoseContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogUnite} />
        <Catalog catalogData={catalogArbe} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";