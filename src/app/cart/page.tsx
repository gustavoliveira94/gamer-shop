import { Suspense } from 'react'

import { Cart } from '@/presentation/views'

export default function CartPage() {
  return (
    <Suspense>
      <Cart />
    </Suspense>
  )
}
