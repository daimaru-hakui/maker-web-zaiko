import { fetchTombowData } from "@/actions"
import TombowContainer from "./TombowContainer"

export async function TombowData() {
  const data = await fetchTombowData()
  if (!data) return null
  return <TombowContainer data={data} />
}
