"use client";
import { YagiData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { YagiTable } from "./YagiTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: YagiData[];
};

export default function YagiContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<YagiData>();
  const datalist = getDataList(data);
  console.log(data[0]?.createdAt);

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
