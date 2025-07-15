import { fireEvent } from '@testing-library/dom'

import { render } from '@/configs/tests/helpers'

import { Cart } from '../Cart'

import cartMock from './cartMock.json'

beforeEach(() => {
  localStorage.setItem('cart', JSON.stringify(cartMock))
})

describe('Testing <Card/ >', () => {
  it('should render Cart component', () => {
    const { container } = render(<Cart />)

    expect(container).toBeInTheDocument()
  })
  it('should render Back to Catalog link', () => {
    const { getByText } = render(<Cart />)

    expect(getByText('Back to Catalog')).toBeInTheDocument()
  })
  it('should render Items and OrderSummary components', () => {
    const { getByTestId } = render(<Cart />)

    expect(getByTestId('items-component')).toBeInTheDocument()
    expect(getByTestId('order-summary-component')).toBeInTheDocument()
  })
  it('should remove items on Order Summary and Items and disable Checkout', () => {
    const { getAllByTestId, getByTestId, queryByTestId } = render(<Cart />)

    const checkoutButton = getByTestId('checkout-button')
    const removeItem = getAllByTestId('remove-icon')

    expect(getAllByTestId('cart-item-items')).toHaveLength(2)
    expect(getAllByTestId('cart-item-summary')).toHaveLength(2)

    expect(checkoutButton).not.toBeDisabled()

    fireEvent.click(removeItem[0])

    expect(getAllByTestId('cart-item-items')).toHaveLength(1)
    expect(getAllByTestId('cart-item-summary')).toHaveLength(1)

    expect(checkoutButton).not.toBeDisabled()

    fireEvent.click(getByTestId('remove-icon'))

    expect(queryByTestId('cart-item-items')).not.toBeInTheDocument()
    expect(queryByTestId('cart-item-summary')).not.toBeInTheDocument()
    expect(checkoutButton).toBeDisabled()
  })
})
