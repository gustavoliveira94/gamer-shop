import Link from 'next/link'
import { CartIcon } from './assets/CartIcon'

export const Header: React.FC = () => {
  return (
    <header className="bg-secondary">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Link href="/">
          <h2 className="text-cta-primary font-bold text-[24px]">GamerShop</h2>
        </Link>
        <Link href="/cart" data-testid="cart">
          <CartIcon />
        </Link>
      </div>
    </header>
  )
}
