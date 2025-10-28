import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function YagiCatalogs() {
  const catalogs = await fetchCatalogs([
    "57vRlgjEa8gMZN8ZxZPk",
    "3vuLDSblesVu3sEUwnWY",
    "R2z8zxSTfijJ9y3TZt9A",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
