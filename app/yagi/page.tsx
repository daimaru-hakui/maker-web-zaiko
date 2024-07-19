import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/utils/get-catalog";
import { fetchYagiData } from "@/actions";
import YagiContainer from "./YagiContainer";

export default async function Yagi() {
  const catalog1 = await getCatalog("i-h50ivky");
  const catalog2 = await getCatalog("in-nhu3ys");
  const catalog3 = await getCatalog("n2zdzprl6");
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
