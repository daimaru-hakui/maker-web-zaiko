import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { getCatalog } from "@/functions/get-catalog";
import { authGuard } from "@/actions";
import AitozContainer from "./AitozContainer";
import { prisma } from "@/libs/prisma";

export default async function AitozPage() {
  // await authGuard("aitoz");
  const catalogss = await getCatalog("aswzcpzqy");
  const catalogaw = await getCatalog("whtxkwo3vb");
  const catalogLadiesSs = await getCatalog("m3gh2ir54");
  const catalogOfficeSs = await getCatalog("zizmqccya");
  const catalogOfficeAw = await getCatalog("zizmqccya");

  const getData = async () => {
    const data = await prisma.aitoz.findMany({
      orderBy: {
        row: "asc",
      },
    });
    return data;
  };

  const data = await getData();

  // const data = await fetchAitozData();
  // if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <AitozContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogss} />
        <Catalog catalogData={catalogaw} />
        <Catalog catalogData={catalogLadiesSs} />
        <Catalog catalogData={catalogOfficeAw} />
      </CatalogArea>
    </main>
  );
}
