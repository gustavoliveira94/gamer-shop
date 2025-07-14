import { SWRConfig } from 'swr'

import { getCatalog } from '@/core/services/getCatalog'
import { Catalog } from './components/Catalog/Catalog'
import { Header } from './components/Header/Header'
import { globalSearchParams as searchParamsCache } from '@/core/utils/globalSearchParams'

interface HomeProps {
  searchParams: {
    genre?: string
  }
}

export const Home: React.FC<HomeProps> = async (props) => {
  const searchParams = props?.searchParams
  const { genre } = searchParamsCache.parse(searchParams)

  const catalog = await getCatalog({ genre })

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <Header availableFilters={catalog.availableFilters || []} />
      <SWRConfig value={{ fallback: { '/api/games': catalog }, fallbackData: [catalog] }}>
        <Catalog />
      </SWRConfig>
    </div>
  )
}
