import { fetchAitozData } from "@/actions"
import AitozContainer from "./AitozContainer"

export async function AitozData() {
  const data = await fetchAitozData()
  if (!data) return
  return <AitozContainer data={data} />
}
