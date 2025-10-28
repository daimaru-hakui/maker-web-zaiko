import { Catalog } from "@/components/Catalog"
import { CatalogArea } from "@/components/CatalogArea"
import { fetchCatalogs } from "@/utils/fetch-catalog"

export async function AitosCatalgs() {
  const catalogs = await fetchCatalogs([
    "Z2uVd0KN2cYzUXGmJutO",
    "CXyrNHzyDARuicPKEC3P",
    "ixQ2b1bVQjbchn7ZsTzD",
    "WC02y2lIBIfIft94mraK",
    "QbLpw0PYZFZPBXlrXgRK",
  ])
  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  )
}
