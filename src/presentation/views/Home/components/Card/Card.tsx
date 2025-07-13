import Image from 'next/image'

import { Game } from '@/core/utils/endpoint'

interface CardProps {
  game: Game
}

export const Card: React.FC<CardProps> = ({ game }) => {
  return (
    <div className="max-w-[380px] w-[100%] h-[436px] rounded-2xl border-[0.5px] border-secondary p-[24px]">
      <Image
        src={game.image}
        alt={game.name}
        className="w-full h-[240px] object-cover rounded-tr-2xl rounded-tl-2xl"
        width={332}
        height={240}
      />
      <div className="flex flex-col gap-2 mt-4 mb-[20px]">
        <h4 className="text-secondary text-base font-bold">{game.genre}</h4>
        <div className="flex items-center justify-between">
          <p className="text-primary text-lg font-bold" title={game.name}>
            {game.name.length >= 20 ? `${game.name.slice(0, 20)}...` : game.name}
          </p>
          <span className="text-primary text-lg font-bold">${game.price}</span>
        </div>
      </div>
      <button className="w-[100%] h-[56px] border border-cta-primary rounded-lg font-bold text-primary text-base">
        ADD TO CART
      </button>
    </div>
  )
}
