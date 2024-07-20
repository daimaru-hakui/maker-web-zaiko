import { KosugiFont } from "@/app/layout";
import { Box, Table, TableContainer } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  maxW?: string;
  className?: string;
};

const TableArea: FC<Props> = ({ children, maxW = "900px", className }) => {
  return (
    <TableContainer mt={6} px={6} overflowX="unset" overflowY="unset" className={className}>
      <Box
        className={`tracking-wide ${KosugiFont.className} border border-gray-200 bg-white p-3 pt-0 rounded-md`}
        overflowX="auto"
        position="relative"
        maxW={{ base: "850px", "2xl": maxW }}
        maxH="calc(100vh - 230px)"
      >
        <Table size="sm" variant="simple" bg="white">
          {children}
        </Table>
      </Box>
    </TableContainer>
  );
};

export default TableArea;
