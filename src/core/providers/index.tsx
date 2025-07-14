import { Toaster } from 'react-hot-toast'

import { JotaiProvider } from './JotaiProvider'
import { NuqsProvider } from './NuqsProvider'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <NuqsProvider>
      <JotaiProvider>{children}</JotaiProvider>
      <Toaster />
    </NuqsProvider>
  )
}
