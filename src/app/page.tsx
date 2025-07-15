import { Home } from '@/presentation/views'

export default async function HomePage({ searchParams }: { searchParams: { genre?: string } }) {
  return <Home searchParams={searchParams} />
}
