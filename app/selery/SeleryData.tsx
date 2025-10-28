import { fetchSeleryData } from "@/actions"
import SeleryContainer from "./SeleryContainer"

export async function SeleryData() {
  const data = await fetchSeleryData()
  if (!data) return null
  return <SeleryContainer data={data} />
}
