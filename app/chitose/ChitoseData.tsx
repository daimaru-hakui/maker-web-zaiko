import { fetchChitoseData } from "@/actions"
import ChitoseContainer from "./ChitoseContainer"

export async function ChitoseData() {
  const data = await fetchChitoseData()
  if (!data) return null
  return <ChitoseContainer data={data} />
}
