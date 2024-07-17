import axios from "axios";

export const getCatalog = async (id: string) => {
  const res = await axios.get(
    `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
      },
    }
  );
  return res.data;
};
