"use client";
import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import TableArea from "@/components/table-area";
import { Sowa } from "@prisma/client";

type Props = {
  filterData: Sowa[];
};

export const SowaTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1600">
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>品名</Th>
              <Th>色</Th>
              <Th>サイズ</Th>
              <Th>在庫数</Th>
              <Th>外部在庫数</Th>
              <Th>仕掛数量1</Th>
              <Th>仕掛納期1</Th>
              <Th>仕掛数量2</Th>
              <Th>仕掛納期2</Th>
              <Th>仕掛数量3</Th>
              <Th>仕掛納期3</Th>
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
                <Td isNumeric>{data.nextTimeStock}</Td>
                <Td isNumeric>{data.nextTimeDate}</Td>
                <Td isNumeric>{data.nextTimeStock2}</Td>
                <Td isNumeric>{data.nextTimeDate2}</Td>
                <Td isNumeric>{data.nextTimeStock3}</Td>
                <Td isNumeric>{data.nextTimeDate3}</Td>
                <Td>{data.jan}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};