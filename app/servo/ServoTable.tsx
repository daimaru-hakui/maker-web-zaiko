"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import TableArea from "@/components/table-area";
import { Servo } from "@prisma/client";

type Props = {
  filterData: Servo[];
};

export const ServoTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1200">
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>品名</Th>
              <Th>色</Th>
              <Th>サイズ</Th>
              <Th>在庫数</Th>
              <Th>入荷予定①日付</Th>
              <Th>入荷予定①予定数</Th>
              <Th>入荷予定②日付</Th>
              <Th>入荷予定②予定数</Th>
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
                <Td textAlign="center">{data.nextTimeDate}</Td>
                <Td isNumeric>{data.nextTimeStock}</Td>
                <Td textAlign="center">{data.nextTimeDate2}</Td>
                <Td isNumeric>{data.nextTimeStock2}</Td>
                <Td>{data.jan}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};
