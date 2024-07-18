"use client";
import { AitozData } from "@/utils/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { AitozTable } from "./AitozTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { usePermission } from "@/hooks/usePermission";
import { useRouter } from "next/navigation";

type Props = {
  data: AitozData[];
};

export default function AitozContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<AitozData>();
  const datalist = getDataList(data);

  const router = useRouter();
  const { isAuth } = usePermission("aitoz");
  if (!isAuth) {
    router.push('/login');
  }
  console.log(isAuth);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Aitoz"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <AitozTable filterData={filterData} />
    </Flex>
  );
}