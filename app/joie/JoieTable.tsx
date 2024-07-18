"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { JoieData } from "@/utils/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: JoieData[];
};

export const JoieTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1300px">
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
                <Th>次回入荷日</Th>
                <Th>次回入荷数</Th>
                <Th>次回入荷日2</Th>
                <Th>次回入荷数2</Th>
                <Th>次回入荷日3</Th>
                <Th>次回入荷数3</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data, index: number) => (
                <Tr key={index}>
                  <Td>{data.productNumber}</Td>
                  <Td textAlign="center">{data.size}</Td>
                  <Td isNumeric>{data.stock}</Td>
                  <Td textAlign="center">{data.nextTimeDate}</Td>
                  <Td isNumeric>{data.nextTimeStock}</Td>
                  <Td textAlign="center">{data.nextTimeDate2}</Td>
                  <Td isNumeric>{data.nextTimeStock2}</Td>
                  <Td textAlign="center">{data.nextTimeDate3}</Td>
                  <Td isNumeric>{data.nextTimeStock3}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};