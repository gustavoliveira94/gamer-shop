'use client'

import { useQueryState } from '@/core/hooks/useQueryState'

interface HeaderProps {
  availableFilters: string[]
}

export const Header: React.FC<HeaderProps> = ({ availableFilters }) => {
  const [genre, setGenre] = useQueryState('genre', {
    defaultValue: '',
  })

  return (
    <div className="flex flex-col pb-[48px] pt-[48px] border-b border-stroke-tertiary gap-[48px] pl-[24px] pr-[24px]">
      <h3 className="text-primary text-[36px] font-bold">Top Sellers</h3>
      <div className="flex items-center justify-end">
        <p className="pr-[24px] whitespace-nowrap">Genre |</p>
        <select
          className="w-[100%] md:w-[237px]"
          disabled={!availableFilters.length}
          onChange={(e) => setGenre(e.target.value)}
          value={genre || ''}
          data-testid="genre-select"
        >
          <option value="">All Genres</option>
          {availableFilters.map((game: any) => (
            <option value={game} key={game}>
              {game}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
