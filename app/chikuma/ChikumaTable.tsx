"use client";
import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
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
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>サイズ</Th>
              <Th>現物在庫</Th>
              <Th>入荷検品中</Th>
              <Th>加工納期1</Th>
              <Th>加工品1</Th>
              <Th>加工納期2</Th>
              <Th>加工品2</Th>
              <Th>JANコード</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterData?.map((data, index: number) => (
              <Tr key={index}>
                <Td>{data.productNumber}</Td>
                <Td textAlign="center">{data.size}</Td>
                <Td isNumeric>{data.stock}</Td>
                <Td isNumeric>{data.inspectStock}</Td>
                <Td>{data.nextTimeDate !== "0" && data.nextTimeDate}</Td>
                <Td isNumeric>{data.nextTimeStock}</Td>
                <Td>{data.nextTimeDate2 !== "0" && data.nextTimeDate2}</Td>
                <Td isNumeric>{data.nextTimeStock2}</Td>
                <Td isNumeric>{data.jan}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};
