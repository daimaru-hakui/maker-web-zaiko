import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchYagiData } from "@/actions";
import YagiContainer from "./YagiContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function Yagi() {
  const catalog1 = await fetchCatalog("57vRlgjEa8gMZN8ZxZPk");
  const catalog2 = await fetchCatalog("3vuLDSblesVu3sEUwnWY");
  const catalog3 = await fetchCatalog("R2z8zxSTfijJ9y3TZt9A");

  const data = await fetchYagiData();

  if (!data) return null;

  return (
    <main className="w-full flex flex-col items-center justify-between overflow-hidden">
      <YagiContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalog1} />
        <Catalog catalogData={catalog2} />
        <Catalog catalogData={catalog3} />
      </CatalogArea>
    </main>
  );
}
export const dynamic = "force-static";
