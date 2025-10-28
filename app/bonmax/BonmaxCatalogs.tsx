import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function BonmaxCatalogs() {
  const catalogs = await fetchCatalogs([
    "9SLwq2qZoyKbd5I2P8e7",
    "8ArV4YXQAqjt2kzR51ba",
    "qX6glfiqR1ERN9KdTUPr",
    "OXoNg7NJijWKhOBwEJDc",
    "eMPmB5qaUr1LEDhMcEmz",
    "RwVPppq1pnArvJamqQIK",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
