import { fetchBostonData } from "@/actions"
import BostonContainer from "./BostonContainer"

export async function BostonData() {
  const data = await fetchBostonData()
  if (!data) return null
  return <BostonContainer data={data} />
}
