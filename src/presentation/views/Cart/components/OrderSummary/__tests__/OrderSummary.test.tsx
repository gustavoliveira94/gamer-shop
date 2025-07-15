import { waitFor } from '@testing-library/dom'

import { render } from '@/configs/tests/helpers'

import { OrderSummary } from '../OrderSummary'

import cartMock from './cartMock.json'

beforeEach(() => {
  localStorage.setItem('cart', JSON.stringify(cartMock))
})

describe('Testing <OrderSummary />', () => {
  it('should render OrderSummary component', () => {
    const { container } = render(<OrderSummary />)
    expect(container).toBeInTheDocument()
  })
  it('should display the correct order total', () => {
    const { getByText } = render(<OrderSummary />)

    expect(getByText('Order Total')).toBeInTheDocument()
  })
  it('should display the correct number of items in the cart', () => {
    const { getByText } = render(<OrderSummary />)

    expect(getByText('2 items')).toBeInTheDocument()
  })
  it('should render loading state when loading is true', () => {
    const { getByTestId } = render(<OrderSummary />)

    waitFor(() => {
      expect(getByTestId('loading-component')).toBeInTheDocument()
    })
  })
  it('should disable the checkout button when loading is true', () => {
    const { getByRole } = render(<OrderSummary />)

    waitFor(() => {
      const button = getByRole('button', { name: /checkout/i })
      expect(button).toBeDisabled()
    })
  })
  it('should enable the checkout button when loading is false and cart has items', () => {
    const { getByRole } = render(<OrderSummary />)

    const button = getByRole('button', { name: /checkout/i })
    expect(button).not.toBeDisabled()
  })
  it('should render each item in the cart', () => {
    const { getAllByTestId } = render(<OrderSummary />)

    const items = getAllByTestId('cart-item-summary')

    expect(items).toHaveLength(2)
  })
})
