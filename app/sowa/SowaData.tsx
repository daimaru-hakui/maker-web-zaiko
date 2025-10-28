import { fetchSowaData } from "@/actions"
import SowaContainer from "./SowaContainer"

export async function SowaData() {
  const data = await fetchSowaData()
  if (!data) return null
  return <SowaContainer data={data} />
}
