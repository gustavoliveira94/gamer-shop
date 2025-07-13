import { render } from '@testing-library/react'

import { Header } from '../Header'

describe('Testing <Header /> Component', () => {
  it('Should render Logo Link and Cart Link', () => {
    const { getByRole, getByTestId } = render(<Header />)

    expect(getByRole('link', { name: /GamerShop/i })).toHaveAttribute('href', '/')
    expect(getByTestId('cart')).toHaveAttribute('href', '/cart')
  })
})
