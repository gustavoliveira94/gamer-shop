'use client'

import { Card } from '../Card/Card'
import { useCatalog } from '@/core/hooks/Home/useCatalog'

export const Catalog: React.FC = () => {
  const { data, isLoading, setPage, isLoadingMore } = useCatalog()

  if (isLoading) {
    return (
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center h-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
          <p className="text-primary text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-[48px] pb-[48px]">
      <div className="flex flex-wrap xl:justify-start justify-center gap-[48px] pb-[48px] lg:pr-0 lg:pl-0 pl-[24px] pr-[24px]">
        {data.games.length ? (
          data.games.map((game) => {
            return <Card key={game.id} game={game} />
          })
        ) : (
          <div className="flex items-center justify-center w-full h-[400px] border-[0]">
            <p className="text-primary text-lg">No games available.</p>
          </div>
        )}
      </div>
      {data.currentPage < data.totalPages ? (
        <button
          className="w-[100%] w-[137px] h-[56px] bg-cta-primary rounded-2xl text-white font-bold text-base ml-[24px] lg:m-0 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoadingMore}
        >
          {isLoadingMore ? 'Loading More...' : 'SEE MORE'}
        </button>
      ) : null}
    </div>
  )
}
