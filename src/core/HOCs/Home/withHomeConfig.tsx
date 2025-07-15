import { SWRConfig } from 'swr'
import { unstable_serialize } from 'swr/infinite'

import { getCatalog } from '@/core/services/getCatalog'
import { globalSearchParams as searchParamsCache } from '@/core/utils/globalSearchParams'

interface IHomeConfig {
  searchParams: {
    genre?: string
  }
}

export function withHomeConfig(Component: React.ComponentType<IHomeConfig>) {
  return async (props: IHomeConfig) => {
    const { genre } = searchParamsCache.parse(props.searchParams)
    const catalog = await getCatalog({ genre })

    const fallback = {
      [unstable_serialize((index) => ['/api/games', genre, index + 1])]: [catalog],
    }

    return (
      <SWRConfig value={{ fallback }}>
        <Component {...props} />
      </SWRConfig>
    )
  }
}
