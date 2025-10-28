import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalogs } from "@/utils/fetch-catalog";

type CatalogsProps = {
  ids: string[];
};

export async function Catalogs({ ids }: CatalogsProps) {
  const catalogs = await fetchCatalogs(ids);

  return (
    <CatalogArea>
      {catalogs.map((catalog, idx) => (
        <Catalog key={idx} catalogData={catalog} />
      ))}
    </CatalogArea>
  );
}
