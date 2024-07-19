"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { SeleryTable } from "./SeleryTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Selery } from "@prisma/client";

type Props = {
  data: Selery[];
};

export default function SeleryContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Selery>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Selery / ifory / SKITTO"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <SeleryTable filterData={filterData} />
    </Flex>
  );
}