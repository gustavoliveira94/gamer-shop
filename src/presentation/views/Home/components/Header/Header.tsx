'use client'

interface HeaderProps {
  availableFilters: string[]
}

export const Header: React.FC<HeaderProps> = ({ availableFilters }) => {
  return (
    <div className="flex flex-col pb-[48px] pt-[48px] border-b border-stroke-tertiary gap-[48px] mb-[48px]">
      <h3 className="text-primary text-[36px] font-bold">Top Sellers</h3>
      <div className="flex items-center justify-end">
        <p className="pr-[24px]">Genre |</p>
        <select className="w-[237px]" disabled={!availableFilters.length}>
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
