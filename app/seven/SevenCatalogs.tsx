import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function SevenCatalogs() {
  const catalogs = await fetchCatalogs([
    "WvFRIqLAAkaolED0ZLYW",
    "gpiS5mf8gHkDNWGtwINs",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
