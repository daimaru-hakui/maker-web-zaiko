"use client";
import { SeleryData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { SeleryTable } from "./SeleryTable";

type Props = {
  data: SeleryData[];
};

export default function SeleryContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<SeleryData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

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