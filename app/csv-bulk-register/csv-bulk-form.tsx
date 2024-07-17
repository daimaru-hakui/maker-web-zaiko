"use client";
import { useCsvUpload } from "@/hooks/useCsvUpload";
import { useStore } from "@/store";
import React, { useEffect, useState } from "react";

const CsvBulkForm = () => {
  const [fileUploads, setFileUploads] = useState<File[] | null>(null);
  const setIsLoading = useStore((state) => state.setIsLoading);
  const resultList = useStore((state) => state.resultList);
  const {
    tombowCsvRegister,
    chikumaCsvRegister,
    seleryCsvRegister,
    chitoseCsvRegister,
    servoCsvRegister,
    karseeCsvRegister,
    bonmaxCsvRegister,
    burtleCsvRegister,
    joieCsvRegister,
    sevenCsvRegister,
    cocosCsvRegister,
    aitozCsvRegister,
    yagiCsvRegister
  } = useCsvUpload();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setFileUploads((prev) => [...Array.from(prev || []), ...Array.from(files)]);
  };

  const handleClickRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    fileUploads: File[] | null
  ) => {
    e.preventDefault();
    if (!fileUploads) return;
    setIsLoading(true);
    Promise.all([fileUploads.map((file) => csvFileRegister(file))]).catch(
      (err) => {
        console.error(err);
      }
    );
  };

  const regTest = (str: string, filename: string) => {
    const reg = new RegExp(str);
    return reg.test(filename);
  };

  const csvFileRegister = async (file: File): Promise<void> => {
    const reader = new FileReader();
    reader.readAsText(file, "Shift_JIS");
    return reader.addEventListener("load", function () {
      if (!reader.result) return;
      const csvFile = reader.result.toString();
      let csvString = csvFile?.toString().split(/\r?\n/);
      let csvArray = csvString.map((a) => a.replace(/(\")/g, "").split(","));
      console.log(file.name);
      if (regTest("^zaikoDownload", file.name)) {
        return tombowCsvRegister(csvArray);
      }
      if (regTest("^前日在庫データ", file.name)) {
        return chikumaCsvRegister(csvArray);
      }
      if (regTest("^BM_DMHK-ZAIKO", file.name)) {
        return bonmaxCsvRegister(csvArray);
      }
      if (regTest("^SNDZAIKO9", file.name)) {
        return seleryCsvRegister(csvArray);
      }
      if (regTest("^hinban", file.name)) {
        return chitoseCsvRegister(csvArray);
      }
      if (regTest("^zaiko_", file.name)) {
        return servoCsvRegister(csvArray);
      }
      if (regTest("^☆大丸白衣様用在庫データ", file.name)) {
        return karseeCsvRegister(csvArray);
      }
      if (regTest("BURTLE", file.name)) {
        return burtleCsvRegister(csvArray);
      }
      if (regTest("^在庫表", file.name)) {
        return joieCsvRegister(csvArray);
      }
      if (regTest("^seven", file.name)) {
        return sevenCsvRegister(csvArray);
      }
      if (regTest("コーコス", file.name)) {
        return cocosCsvRegister(csvArray);
      }
      if (regTest("^大丸白衣様アイトス", file.name)) {
        return aitozCsvRegister(csvArray);
      }
      if (regTest("^ZAIKO_DAIMARU_HAKUI", file.name)) {
        return yagiCsvRegister(csvArray);
      }
    });
  };

  useEffect(() => {
    if (fileUploads?.length === resultList.length) {
      setIsLoading(false);
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

        <button
          className="mt-6 bg-blue-800 px-3 py-1 rounded-md text-white"
          onClick={(e) => handleClickRegister(e, fileUploads)}
        >
          登録
        </button>

        {resultList.length > 0 && (
          <>
            <div className="mt-3">
              全{fileUploads?.length}件中 {resultList.length}
              件登録に成功しました。
            </div>
            <div className="mt-3">
              {resultList.map((result, idx) => (
                <div key={idx}>
                  {idx + 1}. {result}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default CsvBulkForm;
