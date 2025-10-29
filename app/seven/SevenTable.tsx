"use client";
import { FC } from "react";
import TableArea from "@/components/table-area";
import { Seven } from "@prisma/client";

type Props = {
  filterData: Seven[];
};

export const SevenTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1200">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-b hover:bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">品番</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">品名</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">色</th>
              <th className="px-4 py-2 text-center font-semibold text-gray-700">サイズ</th>
              <th className="px-4 py-2 text-right font-semibold text-gray-700">在庫数</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">JANコード</th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((data, index: number) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-left">{data.productNumber}</td>
                <td className="px-4 py-2 text-left">{data.productName}</td>
                <td className="px-4 py-2 text-left">{data.color}</td>
                <td className="px-4 py-2 text-center">{data.size}</td>
                <td className="px-4 py-2 text-right">{data.stock}</td>
                <td className="px-4 py-2 text-left">{data.jan}</td>
              </tr>
            ))}
          </tbody>
        </TableArea>
      )}
    </>
  );
};
