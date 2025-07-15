import { useAtom } from 'jotai'

import { cartAtom } from '@/core/atoms/cartAtom'
import { useEffect, useState } from 'react'

export const useCart = () => {
  const [loading, setLoading] = useState(true)

  const [cart, setCart] = useAtom(cartAtom)

  useEffect(() => {
    setLoading(false)
  }, [])

  const removeFromCart = (gameId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== gameId))
  }

  const orderTotal = cart.reduce((total, game) => total + game.price, 0).toFixed(2)
  const totalItems = cart?.length

  return {
    cart,
    removeFromCart,
    orderTotal,
    loading,
    totalItems,
  }
}
