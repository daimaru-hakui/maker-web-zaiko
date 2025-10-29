"use client"
import { FC } from "react"
import TableArea from "@/components/table-area"
import { DaimaruHakui } from "@prisma/client"

type Props = {
  filterData: DaimaruHakui[]
}

export const DaimaruTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1300px">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-b hover:bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                品番
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                品名
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                サイズ
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                在庫数
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                外部在庫
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                TOTAL
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                仕掛
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((data, index: number) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{data.productNumber}</td>
                <td className="px-4 py-2">{data.productName}</td>
                <td className="px-4 py-2 text-center">{data.size}</td>
                <td className="px-4 py-2 text-right">{data.stock}</td>
                <td className="px-4 py-2 text-right">{data.externalStock}</td>
                <td className="px-4 py-2 text-right">{data.totalStock}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeStock}</td>
              </tr>
            ))}
          </tbody>
        </TableArea>
      )}
    </>
  )
}
