"use client";
import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import TableArea from "@/components/table-area";
import { Bonmax } from "@prisma/client";

type Props = {
  filterData: Bonmax[];
};

export const BonmaxTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1200px">
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>品名</Th>
              <Th>色名</Th>
              <Th>サイズ</Th>
              <Th>在庫数</Th>
              <Th>外部倉庫</Th>
              <Th>入荷予定</Th>
              <Th>入荷日</Th>
              <Th>調達日数</Th>
              <Th>JANコード</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterData?.map((data, index: number) => (
              <Tr key={index}>
                <Td>{data.productNumber}</Td>
                <Td>{data.productName}</Td>
                <Td>{data.color}</Td>
                <Td textAlign="center">{data.size}</Td>
                <Td isNumeric>{data.stock}</Td>
                <Td isNumeric>{data.externalStock}</Td>
                <Td>{data.nextTimeDate}</Td>
                <Td>{data.nextTimeDate !== "0" && data.nextTimeDate}</Td>
                <Td>{data.leadTime}</Td>
                <Td>{data.jan}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};
