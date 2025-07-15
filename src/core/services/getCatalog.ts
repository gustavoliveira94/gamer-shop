'use server'

import { Game } from '../utils/endpoint'

export interface ICatalogReturn {
  games: Game[]
  availableFilters: string[]
  totalPages: number
  currentPage: number
}

interface ICatalogParams {
  genre?: string | null
  page?: number | null
}

export const getCatalog = async ({ genre, page = 1 }: ICatalogParams): Promise<ICatalogReturn> => {
  const genreParam = genre ? `genre=${genre}` : ''
  const pageParam = `&page=${page}`

  try {
    const res = await fetch(`http://localhost:3000/api/games?${genreParam}${pageParam}`, {
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
