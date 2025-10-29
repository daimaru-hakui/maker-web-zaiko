import { useState } from "react"
import { format } from "date-fns"

export function useFilterInput<T extends Record<string, any>>() {
  const [selectedData, setSelectedData] = useState<T[]>([])

  function addFilteredData(productNumber: string, data: T[]) {
    const selectData = data.filter(
      (d) => d.productNumber === productNumber || d.品番 === productNumber,
    )
    if (selectData.length === 0) return
    setSelectedData((prev: T[]) => {
      const newData = [...prev, ...selectData]
      return newData
    })
  }

  function getUniqueProductNumbers(data: T[]) {
    console.log(data.length)
    console.log(
      data[0] && format(data.at(0)?.createdAt, "yyyy年MM月dd日 HH時mm分ss秒"),
    )
    const newData = data.map((d) => d.productNumber)
    const datalist = Array.from(new Set(newData))
    return datalist
  }

  return {
    addFilteredData,
    selectedData,
    setSelectedData,
    getUniqueProductNumbers,
  }
}
