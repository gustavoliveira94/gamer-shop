import { createSearchParamsCache, parseAsString } from 'nuqs/server'

export const searchParams = createSearchParamsCache({
  genre: parseAsString.withDefault(''),
})
