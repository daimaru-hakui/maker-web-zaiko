"use client";
import { BonmaxData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { BonmaxTable } from "./BonmaxTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { useRouter } from "next/navigation";
import { usePermission } from "@/hooks/usePermission";

type Props = {
  data: BonmaxData[];
};

export default function BonmaxContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<BonmaxData>();
  const datalist = getDataList(data);
  console.log(data[0]?.createdAt);

  const router = useRouter();
  const { isAuth } = usePermission("bonmax");
  if (!isAuth) {
    router.push('/login');
  }
  console.log(isAuth);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="FACEMIX / BON / LIFEMAX"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <BonmaxTable filterData={filterData} />
    </Flex>
  );
}