import { Home } from '@/presentation/views'

export default function HomePage({ searchParams }: { searchParams: { genre?: string } }) {
  return <Home searchParams={searchParams} />
}
