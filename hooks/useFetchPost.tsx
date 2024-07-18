import { useStore } from "@/utils/store";
import axios from "axios";

export const useFetchPost = () => {
  const setResultList = useStore((state) => state.setResultList);
  async function fetchPost<T>({
    body,
    url,
  }: {
    body: T;
    url: string;
  }): Promise<void> {
    try {
      const res = await axios.post(url, {
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await res.data;
      if (!data) return;
      setResultList(data);
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  return {
    fetchPost,
  };
};
