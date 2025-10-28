import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function ChitoseCatalogs() {
  const catalogs = await fetchCatalogs([
    "ZOEYHdjkHBxGd2RJev0X",
    "ABDLfFC7MTatFAiL4D4T",
    "SL9t3boTeHtv21rbCDoQ",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
