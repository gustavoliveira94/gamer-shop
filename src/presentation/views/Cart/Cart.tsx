import Link from 'next/link'

import { ArrowLeftIcon } from './assets/ArrowLeftIcon'
import { Items } from './components/Items/Items'
import { OrderSummary } from './components/OrderSummary/OrderSummary'
import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils'

export const Cart: React.FC = () => {
  return (
    <main className="w-full flex flex-col max-w-7xl mx-auto pr-[24px] pl-[24px] xl:p-0">
      <div className="h-[72px] flex items-center">
        <Link href="/" className="weight-500 flex items-center gap-2">
          <ArrowLeftIcon />
          Back to Catalog
        </Link>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-[80px] min-h-[588px]">
        <Items />
        <OrderSummary />
      </div>
    </main>
  )
}
