import { createSearchParamsCache, parseAsString, parseAsInteger } from 'nuqs/server'

export const searchParams = createSearchParamsCache({
  genre: parseAsString.withDefault(''),
  page: parseAsString.withDefault('1'),
})
