import { render as rtlRender } from '@testing-library/react'
import { Toaster } from 'react-hot-toast'

import { JotaiProvider } from '@/core/providers/JotaiProvider'

export const render = (ui: React.ReactElement, options?: any) => {
  let Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
    <>
      <JotaiProvider>{children}</JotaiProvider>
      <Toaster />
    </>
  )

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}
