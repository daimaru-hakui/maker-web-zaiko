import { Catalog } from "@/components/Catalog"
import { CatalogArea } from "@/components/CatalogArea"
import { fetchCatalogs } from "@/utils/fetch-catalog"

export async function ServoCatalogs() {
  const catalogs = await fetchCatalogs([
    "3PSm4sRFWrc83Z588Mmi",
    "HdeSEUh9pa9ACZzO4BEi",
    "5O0l7oJ0HHDd58bWa3gO",
    "nTHFMlkdQZ1vjHBNcnfQ",
    "kyiYg6k43OrLZ1Ok3Quc",
    "x3oUUc4lBk4Jerr7mvEK",
  ])

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  )
}
