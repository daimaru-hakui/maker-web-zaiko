export default function loading() {
  return (
    <div className="w-full flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div
        className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full"
        style={{
          animation: "spin 0.65s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
