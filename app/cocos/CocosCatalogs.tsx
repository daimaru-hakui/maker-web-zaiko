import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function CocosCatalogs() {
  const catalogs = await fetchCatalogs([
    "TmMD6uV45chHk4Wbv9tu",
    "7Fqh15qIj4MgfefTDthH",
    "a8WkXgDPhg78FTIYrwfD",
    "YIhkXPA5GB9rnf4ewGzx",
    "QVcAdPI9cTwOmr53caYG",
    "fCYu57Bqw9kyltgdeHeZ",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
