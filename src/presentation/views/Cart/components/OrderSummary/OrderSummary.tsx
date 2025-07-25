'use client'

import { useCart } from '@/core/hooks/Cart/useCart'
import { Loading } from '@/presentation/components'

export const OrderSummary: React.FC = () => {
  const { cart, orderTotal, loading, totalItems } = useCart()

  return (
    <div
      className="flex flex-col gap-[32px] w-full max-w-[522px] mb-[48px]"
      data-testid="order-summary-component"
    >
      <div className="border rounded-[8px] mt-[0] md:mt-[176px] pt-[32px] pb-[32px] pl-[24px] pr-[24px]">
        <h4 className="font-bold text-primary text-[24px]">Order Summary</h4>
        {!loading ? (
          <>
            <p className="font-[400] text-primary text-[18px]">{`${totalItems} ${totalItems > 1 ? 'items' : 'item'}`}</p>
            <ul className="mt-[32px] pb-[24px] border-b">
              {cart.map((game) => (
                <li
                  key={game.id}
                  className="flex justify-between items-center"
                  data-testid="cart-item-summary"
                >
                  <span className="font-[400] text-primary text-[18px]">{game.name}</span>
                  <span className="font-[400] text-primary text-[18px]">
                    ${game.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-[16px]">
              <span className="font-bold text-primary text-[20px]">Order Total</span>
              <span className="font-bold text-primary text-[20px]">${orderTotal}</span>
            </div>
          </>
        ) : (
          <Loading height="h-[150px]" />
        )}
      </div>

      <button
        className="bg-cta-primary text-white font-bold text-[16px] w-full h-[56px] rounded-[8px] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading || totalItems === 0}
        data-testid="checkout-button"
      >
        Checkout
      </button>
    </div>
  )
}
