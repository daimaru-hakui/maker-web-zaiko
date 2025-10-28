import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function BurtleCatalogs() {
  const catalogs = await fetchCatalogs([
    "clNRdfRwPcvYuBOdn0Ez",
    "9B6TCiCF2CpCEiOVi7Km",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
