import { useAtom } from 'jotai'

import { cartAtom } from '@/core/atoms/cartAtom'
import { Game } from '@/core/utils/endpoint'
import { useToast } from '../useToast'

export const useAddToCart = () => {
  const [cart, setCart] = useAtom(cartAtom)

  const { toast } = useToast()

  const addToCart = (game: Game) => {
    const gameExists = cart.some((item) => item.id === game.id)

    if (gameExists) {
      toast({ message: 'Game already in cart', type: 'error' })
      return
    }

    setCart((prevCart) => [...prevCart, game])
  }

  return { cart, addToCart }
}
