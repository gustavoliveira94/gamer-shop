'use client'

import Image from 'next/image'

import { RemoveIcon } from './assets/RemoveIcon'
import { useCart } from '@/core/hooks/Cart/useCart'
import { Loading } from '@/presentation/components'

export const Items: React.FC = () => {
  const { cart, removeFromCart, loading, totalItems } = useCart()

  return (
    <div className="flex flex-col pt-[48px] w-full" data-testid="items-component">
      <h4 className="font-bold text-primary text-[36px]">Your Cart</h4>
      <p className="font-[400] text-primary text-[24px]">{`${totalItems} ${totalItems > 1 ? 'items' : 'item'}`}</p>
      <div className="flex flex-col max-w-[678px] mt-[48px]">
        {!loading ? (
          cart.map((game) => (
            <div
              className="flex flex-col lg:flex-row gap-[24px] relative border-b last:border-b-0 p-[16px]"
              key={game.id}
              data-testid="cart-item-items"
            >
              <RemoveIcon onClick={() => removeFromCart(game.id)} />
              <Image
                src={game.image}
                alt={game.name}
                width={256}
                height={156}
                className="w-[256px] h-[156px]"
              />
              <div className="w-[318px] h-[140px] relative mt-[16px] md:mt-0">
                <span className="text-secondary font-bold">{game.genre}</span>
                <h3 className="text-secondary font-bold text-[20px]">{game.name}</h3>
                <p className="text-secondary font-[400] text-[16px]">{game.description}</p>
                <strong className="absolute bottom-0 right-0 font-bold text-primary text-[20px]">
                  ${game.price.toFixed(2)}
                </strong>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}
