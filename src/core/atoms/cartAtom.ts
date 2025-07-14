import { atom } from 'jotai'

import { Game } from '../utils/endpoint'

export const cartAtom = atom<Game[]>([])
