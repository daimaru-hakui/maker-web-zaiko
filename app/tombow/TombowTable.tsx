"use client";
import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import TableArea from "@/components/table-area";
import { Tombow } from "@prisma/client";

type Props = {
  filterData: Tombow[];
};

export const TombowTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>サイズ</Th>
              <Th>在庫数</Th>
              <Th>JANコード</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterData?.map((data: Tombow, index: number) => (
              <Tr key={index}>
                <Td>{data.productNumber}</Td>
                <Td textAlign="center">{data.size}</Td>
                <Td isNumeric>{data.stock}</Td>
                <Td isNumeric>{data.jan}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};
