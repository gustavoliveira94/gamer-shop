'use server'

import { NuqsAdapter } from 'nuqs/adapters/next'

export const NuqsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <NuqsAdapter>{children}</NuqsAdapter>
}
