import Link from 'next/link'

import { CartIcon } from './assets/CartIcon'

export const Header: React.FC = () => {
  return (
    <header className="bg-secondary sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto pl-[24px] pr-[24px] xl:p-0">
        <Link href="/">
          <h1 className="text-cta-primary font-bold text-[24px]">GamerShop</h1>
        </Link>
        <Link href="/cart" data-testid="cart">
          <CartIcon />
        </Link>
      </div>
    </header>
  )
}
