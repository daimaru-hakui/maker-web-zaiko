import { fetchBonmaxData } from "@/actions"
import BonmaxContainer from "./BonmaxContainer"

export async function BonmaxData() {
  const data = await fetchBonmaxData()
  if (!data) return null
  return <BonmaxContainer data={data} />
}
