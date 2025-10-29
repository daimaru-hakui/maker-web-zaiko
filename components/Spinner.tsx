import React from "react"

export default function LoadingSpinner() {
  return (
    <div
      className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full"
      style={{
        animation: "spin 0.65s linear infinite",
      }}
    />
  );
}
