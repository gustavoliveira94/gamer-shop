import { Header } from '@/presentation/views/Home/components/Header/Header'

const Loading: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col max-w-7xl mx-auto">
      <Header availableFilters={[]} />
      <div className="flex flex-col items-center justify-center h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
        <p className="text-primary text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default Loading
