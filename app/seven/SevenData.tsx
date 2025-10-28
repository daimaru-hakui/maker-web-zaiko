import { fetchSevenData } from "@/actions"
import SevenContainer from "./SevenContainer"

export async function SevenData() {
  const data = await fetchSevenData()
  if (!data) return null
  return <SevenContainer data={data} />
}
