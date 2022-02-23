import useSWR from "swr"

function getPlayer (id) {
  const {data, error} = useSWR(`/api/hello`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}