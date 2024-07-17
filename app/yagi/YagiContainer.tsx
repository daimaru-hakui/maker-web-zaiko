"use client";
import { YagiData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { YagiTable } from "./YagiTable";

type Props = {
  data: YagiData[];
};

export default function YagiContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<YagiData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
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
