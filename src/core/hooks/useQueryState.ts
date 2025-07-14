import { parseAsInteger, parseAsString, useQueryState as useQUery } from 'nuqs'

interface IUseQueryState {
  defaultValue: string
}

export function useQueryState(query: string, props?: IUseQueryState) {
  const defaultValue = props?.defaultValue

  return useQUery(query, parseAsString.withDefault(defaultValue || ''))
}
