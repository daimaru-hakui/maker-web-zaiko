interface Props {
  children: (props: { data: any }) => React.ReactNode
  fetcher: () => any
}
export async function FetchDataComp({ children, fetcher }: Props) {
  const data = await fetcher()
  return <>{children({ data })}</>
}
