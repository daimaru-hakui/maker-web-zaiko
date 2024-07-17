"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { SevenData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: SevenData[];
};

export const SevenTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1200">
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>品名</Th>
                <Th>色</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
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
                  <Td>{data.jan}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};