import { useQueryState } from 'nuqs'
import useSWRInfinite from 'swr/infinite'

import { getCatalog } from '@/core/services/getCatalog'

export const useCatalog = () => {
  const [genre] = useQueryState('genre')

  const { data, isLoading, isValidating, setSize, size } = useSWRInfinite(
    (index: number) => {
      return [`/api/games`, genre, index + 1]
    },
    ([, genre, page]) => getCatalog({ genre, page }),
    {
      dedupingInterval: 0,
      revalidateOnMount: false,
      initialSize: 1,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  const mergedCatalogs = data?.flatMap((page) => page.games) || []

  return {
    data: data
      ? { ...data[data.length - 1], games: mergedCatalogs }
      : {
          games: [],
          availableFilters: [],
          totalPages: 0,
          currentPage: 1,
        },
    isLoading: isLoading && size === 1,
    setPage: setSize,
    genre,
    isLoadingMore: isValidating,
  }
}
