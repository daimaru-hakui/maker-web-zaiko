import { fetchBurtleData } from "@/actions"
import BurtleContainer from "./BurtleContainer"

export async function BurtleData() {
  const data = await fetchBurtleData()
  if (!data) return null
  return <BurtleContainer data={data} />
}
