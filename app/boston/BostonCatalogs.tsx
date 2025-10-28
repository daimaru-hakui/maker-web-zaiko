import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function BostonCatalogs() {
  const catalogs = await fetchCatalogs([
    "TwK33iXeZJQa3thFGHtE",
    "jwaznJWerd3N6JWUeZss",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
