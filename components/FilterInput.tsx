"use client";
import { AllData } from "@/utils/types";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

type Props = {
  title: string;
  setFilterData: React.Dispatch<React.SetStateAction<any[]>>;
  datalist: (string | null)[];
  addArray: Function;
  allData: AllData[];
};

export const FilterInput: FC<Props> = ({
  title,
  setFilterData,
  datalist,
  addArray,
  allData,
}) => {
  const [placeholderArray, setPlaceholderArray] = useState<string[]>([]);
  const addPlaceholder = (productNumber: string) => {
    setPlaceholderArray((prev: string[]) => {
      const newArray = [...prev, productNumber].filter((_) => _ !== "");
      return newArray;
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      text: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    addPlaceholder(data.text);
    addArray(data.text, allData);
    reset();
  };

  const onReset = () => {
    reset();
    setPlaceholderArray([]);
    setFilterData([]);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Flex
        mt={{ base: 6, lg: 2 }}
        px={6}
        w="full"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Box fontSize="3xl" fontWeight="500">
          {title}
        </Box>
        <Flex
          w="full"
          maxW="650px"
          gap={3}
          mt={6}
          className="tracking-wider"
          direction={{ base: "column", md: "row" }}
        >
          <InputGroup w="full">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              className="border-gray-300 bg-gray-50"
              list="itemlist"
              placeholder={
                placeholderArray.length > 0
                  ? placeholderArray.join(",")
                  : "品番を入力してください"
              }
              {...register("text")}
            />
          </InputGroup>
          <datalist id="itemlist">
            {datalist.map((data) => (
              <option key={data}>{data}</option>
            ))}
          </datalist>
          <Flex gap={3} w={{ base: "full", md: "auto" }}>
            <input
              type="submit"
              value="検索"
              className="p-2 text-sm bg-blue-800 text-white rounded cursor-pointer w-full md:w-24"
            />
            <button
              value="検索"
              className="p-2 bg-gray-500 text-sm text-white rounded cursor-pointer w-full md:w-24"
              onClick={onReset}
            >
              リセット
            </button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
};
