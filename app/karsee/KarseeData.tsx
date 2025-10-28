import { fetchKarseeData } from "@/actions"
import KarseeContainer from "./KarseeContainer"

export async function KarseeData() {
  const data = await fetchKarseeData()
  if (!data) return null
  return <KarseeContainer data={data} />
}
