import { Game } from '../utils/endpoint'

export interface ICatalog {
  games: Game[]
  availableFilters: string[]
  totalPages: number
  currentPage: number
}

export const getCatalog = async (): Promise<ICatalog> => {
  try {
    const res = await fetch(`http://localhost:3000/api/games`, {
      cache: 'no-store',
    })

    return res.json()
  } catch {
    return {
      games: [],
      availableFilters: [],
      totalPages: 0,
      currentPage: 1,
    }
  }
}
