import { Oswald } from "next/font/google"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  maxW?: string
  className?: string
}

const oswaldFont = Oswald({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
})

const TableArea: FC<Props> = ({ children, maxW = "900px", className }) => {
  return (
    <div
      className={`mt-6 px-6 overflow-visible ${className} ${oswaldFont.className}`}
    >
      <div
        className="overflow-x-auto overflow-y-auto tracking-wide border border-gray-200 bg-white p-3 pt-0 rounded-md relative"
        style={{
          maxWidth: `max(850px, ${maxW})`,
          maxHeight: "calc(100vh - 230px)",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default TableArea
