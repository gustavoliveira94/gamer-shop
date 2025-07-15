import { fireEvent, waitFor } from '@testing-library/dom'

import { render } from '@/configs/tests/helpers'

import { Items } from '../Items'

import cartMock from './cartMock.json'

beforeEach(() => {
  localStorage.setItem('cart', JSON.stringify(cartMock))
})

describe('Testing <Items />', () => {
  it('should render Items component', () => {
    const { container } = render(<Items />)
    expect(container).toBeInTheDocument()
  })

  it('should render the title and item count', () => {
    const { getByText } = render(<Items />)
    expect(getByText('Your Cart')).toBeInTheDocument()
    expect(getByText('2 items')).toBeInTheDocument()
  })
  it('should render cart items when not loading', () => {
    const { getAllByTestId } = render(<Items />)

    expect(getAllByTestId('cart-item-items')).toHaveLength(2)
  })
  it('should display loading state when loading is true', () => {
    const { getByTestId, queryAllByTestId } = render(<Items />)

    waitFor(() => {
      expect(queryAllByTestId('cart-item-items')).not.toHaveLength(2)
      expect(getByTestId('loading-component')).toBeInTheDocument()
    })
  })
  it('should call removeFromCart when RemoveIcon is clicked', () => {
    const { getAllByTestId, getByTestId } = render(<Items />)

    expect(getAllByTestId('cart-item-items')).toHaveLength(2)

    const removeIcons = getAllByTestId('remove-icon')[0]

    fireEvent.click(removeIcons)

    expect(getByTestId('cart-item-items')).toBeInTheDocument()
  })
  it('should handle empty cart state', () => {
    const { getByText, getAllByTestId } = render(<Items />)

    const removeIcons = getAllByTestId('remove-icon')

    removeIcons.map((item) => fireEvent.click(item))

    expect(getByText('0 item')).toBeInTheDocument()
  })
})
