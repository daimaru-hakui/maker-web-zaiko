import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

export async function JoieCatalogs() {
  const catalogs = await fetchCatalogs([
    "tHct8wrii7FBF8ssRIbW",
    "EGLLipaquXFGYXPt8fIz",
  ]);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
