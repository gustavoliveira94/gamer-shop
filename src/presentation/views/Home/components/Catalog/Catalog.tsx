import { ICatalog } from '@/core/services/getCatalog'

import { Card } from '../Card/Card'

interface CatalogProps {
  catalog: ICatalog
}

export const Catalog: React.FC<CatalogProps> = async ({ catalog }) => {
  return (
    <div className="flex flex-wrap gap-[48px]">
      {catalog.games ? (
        catalog.games.map((game) => {
          return <Card key={game.id} game={game} />
        })
      ) : (
        <div className="flex items-center justify-center w-full h-[400px]">
          <p className="text-primary text-lg">No games available</p>
        </div>
      )}
    </div>
  )
}
