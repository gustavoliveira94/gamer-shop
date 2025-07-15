import { render } from '@testing-library/react'

import { Header } from '../Header'

import cartMock from './cartMock.json'

beforeAll(() => {
  localStorage.setItem('cart', JSON.stringify(cartMock))
})

describe('Testing <Header /> Component', () => {
  it('Should render Logo Link and Cart Link', () => {
    const { getByRole, getByTestId } = render(<Header />)

    expect(getByRole('link', { name: /GamerShop/i })).toHaveAttribute('href', '/')
    expect(getByTestId('cart')).toHaveAttribute('href', '/cart')
  })
  it('Should render Cart Icon with correct total items', () => {
    const { getByTestId } = render(<Header />)

    const cartItems = getByTestId('cart-total-items')

    expect(cartItems).toBeInTheDocument()
    expect(cartItems).toHaveTextContent('2')
  })
  it('Should render Cart Icon with 0 total items', () => {
    localStorage.clear()

    const { getByTestId } = render(<Header />)

    const cartItems = getByTestId('cart-total-items')

    expect(cartItems).toBeInTheDocument()
    expect(cartItems).toHaveTextContent('0')
  })
})
