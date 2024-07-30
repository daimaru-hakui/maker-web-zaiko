import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchAitozData } from "@/actions";
import AitozContainer from "./AitozContainer";
import { fetchCatalog } from "@/utils/fetch-catalog";

export default async function AitozPage() {
  const catalogss = await fetchCatalog("Z2uVd0KN2cYzUXGmJutO");
  const catalogaw = await fetchCatalog("CXyrNHzyDARuicPKEC3P");
  const catalogOfficeSs = await fetchCatalog("ixQ2b1bVQjbchn7ZsTzD");
  const catalogOfficeAw = await fetchCatalog("WC02y2lIBIfIft94mraK");
  const catalogTshirt = await fetchCatalog("QbLpw0PYZFZPBXlrXgRK");

  const data = await fetchAitozData();
  if (!data) return;

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <AitozContainer data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogss} />
        <Catalog catalogData={catalogaw} />
        <Catalog catalogData={catalogOfficeSs} />
        <Catalog catalogData={catalogOfficeAw} />
        <Catalog catalogData={catalogTshirt} />
      </CatalogArea>
    </main>
  );
}

export const dynamic = "force-static";
