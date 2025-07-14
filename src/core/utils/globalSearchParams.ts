import { createSearchParamsCache, parseAsString } from 'nuqs/server'

export const globalSearchParams = createSearchParamsCache({
  genre: parseAsString.withDefault(''),
})
