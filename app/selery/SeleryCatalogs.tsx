import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function SeleryCatalogs() {
  const catalogs = await fetchCatalogs([
    "WewRqYjWSLqO3tBFA5ED",
    "5KOWq1BVWSgfFKr7rd14",
    "spwgfseVNbJJyhPbMuLz",
    "sEYUXN1ERqvMPswsQQUt",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
