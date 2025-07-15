import { Catalog } from './components/Catalog/Catalog'
import { Header } from './components/Header/Header'
import { HomeProps, withHomeConfig } from '@/core/HOCs/Home/withHomeConfig'

export const Home: React.FC<HomeProps> = withHomeConfig((props) => {
  return (
    <main className="w-full flex flex-col flex-1 max-w-7xl mx-auto">
      <Header availableFilters={props.availableFilters || []} />
      <Catalog />
    </main>
  )
})
