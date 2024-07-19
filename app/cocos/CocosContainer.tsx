"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useFilterInput } from "@/hooks/useFilterInput";
import { CocosTable } from "./CocosTable";
import { Cocos } from "@prisma/client";

type Props = {
  data: Cocos[];
};

export default function CocosContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Cocos>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="CO-COS"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <CocosTable filterData={filterData} />
    </Flex>
  );
}