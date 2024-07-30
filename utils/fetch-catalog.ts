import axios from "axios";

export const fetchCatalog = async (id: string) => {
  const url = "https://myuni-digital-catalog.vercel.app/api/catalogs";
  const res = await axios
    .get(`${url}/${id}`, {
      headers: {
        "X-MICROCMS-API-KEY":
          process.env.X_MICROCMS_API_KEY ||
          "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e",
      },
    })
    .catch((e:unknown) => {
      console.log(e instanceof Error ? e.message : "エラーが発生しました");
      return null
    });
  return res?.data || null;
};
