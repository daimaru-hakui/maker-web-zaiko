"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { CocosData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: CocosData[];
};

export const CocosTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1300px">
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>品名</Th>
                <Th>カラー</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
                <Th>仕掛日付</Th>
                <Th>仕掛数量</Th>
                <Th>JANコード</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data, index: number) => (
                <Tr key={index}>
                  <Td>{data.productNumber}</Td>
                  <Td> {data.productName}</Td>
                  <Td textAlign="center">{data.color}</Td>
                  <Td textAlign="center">{data.size}</Td>
                  <Td isNumeric>{data.stock}</Td>
                  <Td isNumeric>{data.nextTimeDate}</Td>
                  <Td isNumeric>{data.nextTimeStock}</Td>
                  <Td isNumeric>{data.jan}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};