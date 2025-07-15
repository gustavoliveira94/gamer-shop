import { getCatalog } from '@/core/services/getCatalog'
import { Catalog } from './components/Catalog/Catalog'
import { Header } from './components/Header/Header'
import { globalSearchParams as searchParamsCache } from '@/core/utils/globalSearchParams'
import { withHomeConfig } from '@/core/HOCs/Home/withHomeConfig'

interface HomeProps {
  searchParams: {
    genre?: string
  }
}

export const Home: React.FC<HomeProps> = withHomeConfig(async (props) => {
  const searchParams = props?.searchParams
  const { genre } = searchParamsCache.parse(searchParams)

  const catalog = await getCatalog({ genre })

  return (
    <main className="w-full flex flex-col flex-1 max-w-7xl mx-auto">
      <Header availableFilters={catalog.availableFilters || []} />
      <Catalog />
    </main>
  )
})
