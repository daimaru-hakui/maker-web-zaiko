"use client";
import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import TableArea from "@/components/table-area";
import { DaimaruHakui } from "@prisma/client";

type Props = {
  filterData: DaimaruHakui[];
};

export const DaimaruTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1300px">
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>品名</Th>
              <Th>サイズ</Th>
              <Th>在庫数</Th>
              <Th>外部在庫</Th>
              <Th>TOTAL</Th>
              <Th>仕掛</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterData?.map((data, index: number) => (
              <Tr key={index}>
                <Td>{data.productNumber}</Td>
                <Td>{data.productName}</Td>
                <Td textAlign="center">{data.size}</Td>
                <Td isNumeric>{data.stock}</Td>
                <Td isNumeric>{data.externalStock}</Td>
                <Td isNumeric>{data.totalStock}</Td>
                <Td isNumeric>{data.nextTimeStock}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};