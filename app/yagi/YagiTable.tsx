import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import TableArea from "@/components/table-area";
import { Yagi } from "@prisma/client";

type Props = {
  filterData: Yagi[];
};

export function YagiTable({ filterData }: Props) {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>品名</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
                <Th>JANコード</Th>
                <Th>ブランド</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data, index: number) => (
                <Tr key={index}>
                  <Td>{data.productNumber}</Td>
                  <Td>{data.productName}</Td>
                  <Td textAlign="center">{data.size}</Td>
                  <Td isNumeric>{data.stock}</Td>
                  <Td isNumeric>{data.jan}</Td>
                  <Td isNumeric>{data.brand}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
}
