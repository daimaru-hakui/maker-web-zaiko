"use client";
import * as actions from "@/actions";
import { useStore } from "@/utils/store";
import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function CsvBulkForm() {
  const [fileUploads, setFileUploads] = useState<File[] | null>(null);
  const setIsLoading = useStore((state) => state.setIsLoading);
  const resultList = useStore((state) => state.resultList);
  const setResultList = useStore((state) => state.setResultList);
  const resetResultList = useStore((state) => state.resetResultList);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setFileUploads((prev) => [...Array.from(prev || []), ...Array.from(files)]);
  };

  const handleRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    fileUploads: File[] | null
  ) => {
    e.preventDefault();
    if (!fileUploads) return;
    setIsLoading(true);
    for (const file of fileUploads) {
      await csvFileRegister(file);
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    resetResultList();
    setFileUploads(null);
  };

  const regTest = (str: string, filename: string) => {
    const reg = new RegExp(str);
    return reg.test(filename);
  };

  const csvFileRegister = async (file: File): Promise<void> => {
    const reader = new FileReader();
    reader.readAsText(file, "Shift_JIS");
    return reader.addEventListener("load", async function () {
      if (!reader.result) return;
      const csvFile = reader.result.toString();
      let csvString = csvFile?.toString().split(/\r?\n/);
      let csvArray = csvString.map((a) => a.replace(/(\")/g, "").split(","));
      console.log(file.name);

      if (regTest("^daimaru-zaiko", file.name)) {
        const { message } = await actions.createDaimaruHakui(csvArray);
        return setResultList(message);
      }
      if (regTest("^zaikoDownload", file.name)) {
        const { message } = await actions.createTombow(csvArray);
        return setResultList(message);
      }
      if (regTest("^前日在庫データ", file.name)) {
        const { message } = await actions.createChikuma(csvArray);
        return setResultList(message);
      }
      if (regTest("^SNDZAIKO9", file.name)) {
        const { message } = await actions.createSelery(csvArray);
        return setResultList(message);
      }
      if (regTest("^hinban", file.name)) {
        const { message } = await actions.createChitose(csvArray);
        return setResultList(message);
      }
      if (regTest("^zaiko_", file.name)) {
        const { message } = await actions.createServo(csvArray);
        return setResultList(message);
      }
      if (regTest("^☆大丸白衣様用在庫データ", file.name)) {
        const { message } = await actions.createKarsee(csvArray);
        return setResultList(message);
      }
      if (regTest("BURTLE", file.name)) {
        const { message } = await actions.createBurtle(csvArray);
        return setResultList(message);
      }
      if (regTest("^在庫表.csv", file.name)) {
        const { message } = await actions.createJoie(csvArray);
        return setResultList(message);
      }
      if (regTest("^seven", file.name)) {
        const { message } = await actions.createSeven(csvArray);
        return setResultList(message);
      }
      if (regTest("^ZAIKO_DAIMARU_HAKUI", file.name)) {
        const { message } = await actions.createYagi(csvArray);
        return setResultList(message);
      }
      if (regTest("^大丸白衣様アイトス", file.name)) {
        const { message } = await actions.createAitoz(csvArray);
        return setResultList(message);
      }
      if (regTest("コーコス", file.name)) {
        const csvArray1 = csvArray.slice(0, 10000);
        const csvArray2 = csvArray.slice(10001);
        await actions.createCocos(csvArray1, 1);
        const { message } = await actions.createCocos(csvArray2, 2);
        return setResultList(message);
      }
      if (regTest("^BM_DMHK-ZAIKO", file.name)) {
        const { message } = await actions.createBonmax(csvArray);
        return setResultList(message);
      }
      if (regTest("^daimaru_hakui_boston", file.name)) {
        const { message } = await actions.createBoston(csvArray);
        return setResultList(message);
      }
      if (regTest("^在庫表SOWA", file.name)) {
        const { message } = await actions.createSowa(csvArray);
        return setResultList(message);
      }

      return setResultList("該当するメーカーがありません");
    });
  };

  useEffect(() => {
    if (fileUploads?.length === resultList.length) {
      setIsLoading(false);
      setFileUploads(null);
    }
  }, [fileUploads?.length, resultList.length, setIsLoading]);

  return (
    <form>
      <div className="w-full flex flex-col justify-center">
        <div className="relative w-full h-56">
          <input
            className="w-full h-full opacity-0 absolute z-20"
            type="file"
            accept=".csv"
            multiple
            onChange={handleFileChange}
          />
          <div className="w-full h-full flex flex-col justify-center items-center border border-1 bg-white absolute z-10">
            <div>ファイルアップロード</div>
            <div>
              {fileUploads &&
                fileUploads.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button
            w="full"
            size="sm"
            color="white"
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-400"
          >
            リセット
          </Button>
          <Button
            w="full"
            size="sm"
            bg="blue.700"
            color="white"
            onClick={(e) => handleRegister(e, fileUploads)}
            className="bg-blue-900 hover:bg-blue-800"
          >
            登録
          </Button>
        </div>

        {resultList.length > 0 && (
          <div className="mt-3">
            {resultList.map((result, idx) => (
              <div key={idx}>
                {idx + 1}. {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
