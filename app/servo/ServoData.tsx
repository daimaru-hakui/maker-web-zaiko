import { fetchServoData } from "@/actions"
import ServoContainer from "./ServoContainer"

export async function ServoData() {
  const data = await fetchServoData()
  if (!data) return null
  return <ServoContainer data={data} />
}
