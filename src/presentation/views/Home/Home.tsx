import { getCatalog } from '@/core/services/getCatalog'
import { Catalog } from './components/Catalog/Catalog'
import { Header } from './components/Header/Header'

export const Home: React.FC = async () => {
  const catalog = await getCatalog()

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <Header availableFilters={catalog.availableFilters || []} />
      <Catalog catalog={catalog} />
    </div>
  )
}
