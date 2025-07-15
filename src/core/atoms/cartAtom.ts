import { atomWithStorage } from 'jotai/utils'
import { Game } from '../utils/endpoint'

export const cartAtom = atomWithStorage<Game[]>('cart', [])
