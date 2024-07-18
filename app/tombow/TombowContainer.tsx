"use client";
import { TombowData } from "@/utils/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { TombowTable } from "./TombowTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: TombowData[];
};

export default function TombowContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<TombowData>();
  const datalist = getDataList(data);
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Kiraku"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <TombowTable filterData={filterData} />
    </Flex>
  );
}
