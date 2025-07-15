'use client'

import Link from 'next/link'

import { CartIcon } from './assets/CartIcon'
import { useCart } from '@/core/hooks/Cart/useCart'

export const Header: React.FC = () => {
  const { totalItems } = useCart()

  return (
    <header className="bg-secondary sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto pl-[24px] pr-[24px] xl:p-0">
        <Link href="/">
          <h1 className="text-cta-primary font-bold text-[24px]">GamerShop</h1>
        </Link>
        <Link href="/cart" data-testid="cart" className="flex items-center">
          <CartIcon />
          <small
            className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-tertiary text-white"
            data-testid="cart-total-items"
          >
            {totalItems}
          </small>
        </Link>
      </div>
    </header>
  )
}
