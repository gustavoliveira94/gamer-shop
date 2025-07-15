import { fireEvent } from '@testing-library/dom'

import { render } from '@/configs/tests/helpers'

import { Header } from '../Header'
import { availableFilters as availableFiltersMock } from '@/core/utils/endpoint'

const availableFilters = availableFiltersMock

jest.mock('@/core/hooks/useQueryState', () => ({
  useQueryState: jest.fn(() => ['Action', jest.fn()]),
}))

describe('Testing <Header />', () => {
  it('should render the header with title and genre filter', () => {
    const { getByText, getByTestId } = render(<Header availableFilters={availableFilters} />)

    expect(getByText('Top Sellers')).toBeInTheDocument()
    expect(getByText('Genre |')).toBeInTheDocument()
    expect(getByTestId('genre-select')).toBeInTheDocument()
  })

  it('should call setGenre when a genre is selected', () => {
    const { getByTestId } = render(<Header availableFilters={availableFilters} />)

    const select = getByTestId('genre-select')

    fireEvent.change(select, { target: { value: 'Action' } })

    expect(select).toHaveValue('Action')
  })
  it('should disable the select when no available filters are provided', () => {
    const { getByTestId } = render(<Header availableFilters={[]} />)

    const select = getByTestId('genre-select')

    expect(select).toBeDisabled()
  })
})
