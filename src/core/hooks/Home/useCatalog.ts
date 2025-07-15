import useSWRInfinite from 'swr/infinite'

import { getCatalog } from '@/core/services/getCatalog'
import { useQueryState } from '../useQueryState'

export const useCatalog = () => {
  const [genre] = useQueryState('genre')

  const { data, isLoading, isValidating, setSize, size } = useSWRInfinite(
    (index: number) => {
      return [`/api/games`, genre, index + 1]
    },
    ([, genre, page]) => getCatalog({ genre, page }),
    {
      initialSize: 1,
    }
  )

  const mergedCatalogs = data?.flatMap((page) => page.games) || []
  const catalog = data
    ? { ...data[data.length - 1], games: mergedCatalogs }
    : {
        games: [],
        availableFilters: [],
        totalPages: 0,
        currentPage: 1,
      }

  return {
    data: catalog,
    isLoading: isLoading && size === 1,
    setPage: setSize,
    genre,
    isLoadingMore: isValidating,
  }
}
