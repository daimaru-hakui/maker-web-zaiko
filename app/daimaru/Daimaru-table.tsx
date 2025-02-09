"use client";
import { Box, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { DaimaruData } from "@/utils/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: DaimaruData[];
};

export const DaimaruTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <Thead position="sticky" top={0} zIndex="docked" bg="white">
            <Tr className="h-12">
              <Th>品番</Th>
              <Th>サイズ</Th>
              <Th>在庫数</Th>
              <Th>外部在庫1</Th>
              <Th>外部在庫2</Th>
              <Th>TOTAL</Th>
              {/* <Th>受注残</Th>
                    <Th>予約キープ</Th>
                    <Th>仕掛</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {filterData?.map((data: DaimaruData, index: number) => (
              <Tr key={index}>
                <Td>
                  {data.品番}
                  <Box as="span" ml={2}>
                    {data.商品名}
                  </Box>
                </Td>
                <Td>{data.サイズ}</Td>
                <Td isNumeric>{data.在庫数}</Td>
                <Td isNumeric>{data.徳島在庫}</Td>
                <Td isNumeric>{data.外部在庫}</Td>
                <Td isNumeric>{data.TOTAL}</Td>
                {/* <Td isNumeric>{data.受注残}</Td>
                      <Td isNumeric>{data.予約}</Td>
                      <Td isNumeric>{data.仕掛}</Td> */}
              </Tr>
            ))}
          </Tbody>
        </TableArea>
      )}
    </>
  );
};
