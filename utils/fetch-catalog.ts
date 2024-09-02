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
