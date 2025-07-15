import { SWRConfig } from 'swr'
import { unstable_serialize } from 'swr/infinite'

import { getCatalog } from '@/core/services/getCatalog'
import { globalSearchParams as searchParamsCache } from '@/core/utils/globalSearchParams'

export interface HomeProps {
  searchParams: {
    genre?: string
  }
  availableFilters: string[]
}

export function withHomeConfig(Component: React.ComponentType<HomeProps>) {
  return async (props: HomeProps) => {
    const { genre } = searchParamsCache.parse(props.searchParams)
    const catalog = await getCatalog({ genre })

    const fallback = {
      [unstable_serialize((index) => ['/api/games', genre, index + 1])]: [catalog],
    }

    const componentProps = {
      ...props,
      availableFilters: catalog.availableFilters,
    }

    return (
      <SWRConfig
        value={{
          fallback,
          dedupingInterval: 0,
          revalidateOnMount: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <Component {...componentProps} />
      </SWRConfig>
    )
  }
}
