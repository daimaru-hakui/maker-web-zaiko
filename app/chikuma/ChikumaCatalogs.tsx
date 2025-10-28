import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function ChikumaCatalogs() {
  const catalogs = await fetchCatalogs([
    "b7440yI1Wly8MiGXlaxO",
    "mXFnlH6zLsSqmcTLVtDN",
    "6g8Gzr9UThIKFllkthx5",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
