export const fetchCatalog = async (id: string) => {
  const url = "https://catalog.myuni.jp/api/catalogs";
  const res = await fetch(`${url}/${id}`, {
    cache: "force-cache",
    headers: {
      "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY as string,
    },
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data || null;
};

export const fetchCatalogs = async (ids: string[]) => {
  const baseUrl = "https://catalog.myuni.jp/api/catalogs";
  const apiKey = process.env.X_MICROCMS_API_KEY as string;

  try {
    const results = await Promise.all(
      ids.map(async (id) => {
        try {
          const res = await fetch(`${baseUrl}/${id}`, {
            cache: "force-cache",
            headers: {
              "X-MICROCMS-API-KEY": apiKey,
            },
          });
          if (!res.ok) {
            return null;
          }
          return await res.json();
        } catch (error) {
          console.error(`Failed to fetch catalog with id ${id}:`, error);
          return null;
        }
      })
    );

    return results;
  } catch (error) {
    console.error("Failed to fetch catalogs:", error);
    return ids.map(() => null);
  }
};
