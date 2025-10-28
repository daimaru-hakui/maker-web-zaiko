import { fetchCocosData } from "@/actions"
import CocosContainer from "./CocosContainer"

export async function CocosData() {
  const data = await fetchCocosData()
  if (!data) return null
  return <CocosContainer data={data} />
}
