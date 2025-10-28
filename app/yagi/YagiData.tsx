import { fetchYagiData } from "@/actions"
import YagiContainer from "./YagiContainer"

export async function YagiData() {
  const data = await fetchYagiData()
  if (!data) return null
  return <YagiContainer data={data} />
}
