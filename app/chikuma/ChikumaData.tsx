import { fetchChikumaData } from "@/actions"
import ChikumaContainer from "./ChikumaContainer"

export async function ChikumaData() {
  const data = await fetchChikumaData()
  if (!data) return null
  return <ChikumaContainer data={data} />
}
