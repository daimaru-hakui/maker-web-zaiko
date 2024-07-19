"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { YagiTable } from "./YagiTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Yagi } from "@prisma/client";

type Props = {
  data: Yagi[];
};

export default function YagiContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Yagi>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="UNILADY / RISERVA"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <YagiTable filterData={filterData} />
    </Flex>
  );
}
