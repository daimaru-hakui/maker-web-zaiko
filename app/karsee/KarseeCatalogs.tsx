import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function KarseeCatalogs() {
  const catalogs = await fetchCatalogs([
    "YMY0LQM2nRWDj5gqlryN",
    "UfT9LR5z0C9qQE5vmhjE",
    "pMKHzEz4h0YPX0CGxdOW",
    "YZKfbZG9URgiEWupYZo8",
    "gQpNxvRO7YNTfCIyhlv9",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
