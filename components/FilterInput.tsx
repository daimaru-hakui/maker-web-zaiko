import { Oswald } from "next/font/google"
import { useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

type Props<T extends Record<string, any>> = {
  title: string
  onSetSelectedData: React.Dispatch<React.SetStateAction<T[]>>
  productNumberList: (string | null)[]
  onAddFilteredData: (value: string, data: T[]) => void
  allData: T[]
}

const oswaldFont = Oswald({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
})

export function FilterInput<T extends Record<string, any>>({
  title,
  onSetSelectedData,
  productNumberList,
  onAddFilteredData,
  allData,
}: Props<T>) {
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  const addSearchHistory = (productNumber: string) => {
    setSearchHistory((prev: string[]) => {
      const newArray = [...prev, productNumber].filter((_) => _ !== "")
      return newArray
    })
  }

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      text: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    addSearchHistory(data.text)
    onAddFilteredData(data.text, allData)
    reset()
  }

  const onReset = () => {
    reset()
    setSearchHistory([])
    onSetSelectedData([])
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`flex flex-col items-center justify-center w-full px-6 mt-6 lg:mt-2 ${oswaldFont.className}`}
      >
        <div className={`text-3xl font-black ${oswaldFont.className}`}>
          {title}
        </div>
        <div className="w-full max-w-[650px] gap-2 mt-6 tracking-wider flex flex-col md:flex-row">
          <div className="relative w-full">
            <svg
              className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="min-w-[300px] w-full pl-10 pr-3 py-2 border border-gray-300 rounded bg-white"
              list="itemlist"
              placeholder={
                searchHistory.length > 0
                  ? searchHistory.join(",")
                  : "品番を入力してください"
              }
              {...register("text")}
              autoComplete="off"
            />
          </div>
          <datalist id="itemlist">
            {productNumberList?.map((data) => (
              <option key={data}>{data}</option>
            ))}
          </datalist>
          <div className="flex gap-2 w-full md:w-auto">
            <button
              type="submit"
              className="min-w-[80px] h-10 w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:opacity-90 transition-opacity"
            >
              検索
            </button>
            <button
              type="button"
              onClick={onReset}
              className="min-w-[100px] h-10 w-full md:w-auto px-4 py-2 bg-gray-400 text-white rounded hover:opacity-90 transition-opacity"
            >
              リセット
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
