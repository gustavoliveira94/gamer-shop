import { render } from '@/config/tests/helpers'

import { Catalog } from '../Catalog'
import { allGames } from '@/core/utils/endpoint'
import { fireEvent } from '@testing-library/dom'

let games = allGames

let isLoading = false
let isLoadingMore = false
let totalPages = 3
let currentPage = 1

jest.mock('@/core/hooks/Home/useCatalog', () => ({
  useCatalog: jest.fn(() => ({
    data: {
      games,
      currentPage,
      totalPages,
    },
    isLoading,
    setPage: jest.fn(),
    isLoadingMore,
  })),
}))

describe('Testing <Catalog />', () => {
  it('should render the catalog with a list of games', () => {
    games = []

    const { getByText } = render(<Catalog />)

    expect(getByText('No games available.')).toBeInTheDocument()
  })

  it('should display a loading state while fetching games', () => {
    isLoading = true

    const { getByText } = render(<Catalog />)

    expect(getByText('Loading...')).toBeInTheDocument()
  })
  it('should render the catalog with a list of games', () => {
    games = allGames.slice(0, 12)
    isLoading = false

    const { getAllByTestId } = render(<Catalog />)

    expect(getAllByTestId('card')).toHaveLength(12)
  })
  it('should render a button to load more games', () => {
    totalPages = 3
    currentPage = 1
    isLoading = false

    const { getByText } = render(<Catalog />)

    expect(getByText('SEE MORE')).toBeInTheDocument()
  })
  it('should not render the load more button if all pages are loaded', () => {
    totalPages = 1
    currentPage = 1

    const { queryByText } = render(<Catalog />)

    expect(queryByText('SEE MORE')).not.toBeInTheDocument()
  })
  it('should call setPage when the load more button is clicked', () => {
    isLoading = false
    totalPages = 3
    currentPage = 1
    games = allGames.slice(0, 12)

    const { getByText } = render(<Catalog />)

    const button = getByText('SEE MORE')
    button.onclick = jest.fn()

    fireEvent.click(button)

    expect(button.onclick).toHaveBeenCalled()
  })
  it('should render the Loading More button while loading more games', () => {
    isLoadingMore = true
    totalPages = 3
    currentPage = 1

    const { getByText } = render(<Catalog />)

    const button = getByText('Loading More...')
    expect(button).toBeDisabled()
    expect(getByText('Loading More...')).toBeInTheDocument()
  })
})
