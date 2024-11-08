"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import TableArea from "@/components/table-area";
import { Boston } from "@prisma/client";
import { format } from "date-fns";

type Props = {
  filterData: Boston[];
};

export const BostonTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1200px">
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>品名</Th>
              <Th>サイズ</Th>
              <Th>在庫数</Th>
              <Th>外部倉庫</Th>
              <Th>入荷予定日</Th>
              <Th>入荷予定数</Th>
              <Th>JANコード</Th>
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
                <Td>{data.nextTimeDate?.split(" ")[0]}</Td>
                <Td isNumeric>{data.nextTimeStock}</Td>
                <Td>{data.jan}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};
