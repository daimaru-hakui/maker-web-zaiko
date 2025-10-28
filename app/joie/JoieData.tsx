import { fetchJoieData } from "@/actions"
import JoieContainer from "./JoieContainer"

export async function JoieData() {
  const data = await fetchJoieData()
  if (!data) return null
  return <JoieContainer data={data} />
}
