interface Props<T> {
  children: (props: { data: T }) => React.ReactNode
  fetcher: () => Promise<T>
}
export async function DataFetcher<T>({ children, fetcher }: Props<T>) {
  const data = await fetcher()
  return <>{children({ data })}</>
}
