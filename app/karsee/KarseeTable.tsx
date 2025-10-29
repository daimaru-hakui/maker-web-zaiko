"use client";
import { FC } from "react";
import TableArea from "@/components/table-area";
import { Karsee } from "@prisma/client";

type Props = {
  filterData: Karsee[];
};

export const KarseeTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1300px">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-b hover:bg-gray-50">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">品番</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">品名</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">カラー</th>
              <th className="px-4 py-2 text-center font-semibold text-gray-700">サイズ</th>
              <th className="px-4 py-2 text-right font-semibold text-gray-700">在庫数</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">次回入荷日</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">次回入荷数</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">次回入荷日2</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">次回入荷数2</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">次回入荷日3</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">次回入荷数3</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">ブランド名</th>
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
                <td className="px-4 py-2 text-right">{data.nextTimeDate}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeStock}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeDate2}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeStock2}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeDate3}</td>
                <td className="px-4 py-2 text-right">{data.nextTimeStock3}</td>
                <td className="px-4 py-2 text-left">{data.brand}</td>
                <td className="px-4 py-2 text-left">{data.jan}</td>
              </tr>
            ))}
          </tbody>
        </TableArea>
      )}
    </>
  );
};
