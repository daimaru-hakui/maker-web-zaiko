import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function SowaCatalogs() {
  const catalogs = await fetchCatalogs([
    "zJfBVi74zH0NrwAetdWk",
    "sUJP9HASAZ4u0vJuOAES",
    "msBGA95EgBvNqO0RTif7",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
