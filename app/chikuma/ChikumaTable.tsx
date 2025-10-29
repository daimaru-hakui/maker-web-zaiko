"use client";
import { FC } from "react";
import TableArea from "@/components/table-area";
import { Chikuma } from "@prisma/client";

type Props = {
  filterData: Chikuma[];
};

export const ChikumaTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-b hover:bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">品番</th>
              <th className="px-4 py-2 text-center font-semibold text-gray-700">サイズ</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">現物在庫</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">入荷検品中</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">加工納期1</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">加工品1</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">加工納期2</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">加工品2</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">JANコード</th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((data, index: number) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-left">{data.productNumber}</td>
                <td className="px-4 py-2 text-center">{data.size}</td>
                <td className="px-4 py-2 text-right">{data.stock}</td>
                <td className="px-4 py-2 text-right">{data.inspectStock}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeDate !== "0" && data.nextTimeDate}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeStock}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeDate2 !== "0" && data.nextTimeDate2}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeStock2}</td>
                <td className="px-4 py-2 text-left">{data.jan}</td>
              </tr>
            ))}
          </tbody>
        </TableArea>
      )}
    </>
  );
};
