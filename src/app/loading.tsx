import { Header } from '@/presentation/views/Home/components/Header/Header'
import { Loading as LoadingComponent } from '@/presentation/components'

const Loading: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col max-w-7xl mx-auto">
      <Header availableFilters={[]} />
      <LoadingComponent />
    </div>
  )
}

export default Loading
