import { render } from '@/configs/tests/helpers'

import { Home } from '../Home'
import { allGames, availableFilters } from '@/core/utils/endpoint'

let games = allGames.slice(0, 12)

let isLoading = false
let isLoadingMore = false
let totalPages = 3
let currentPage = 1

jest.mock('@/core/services/getCatalog', () => ({
  getCatalog: jest.fn(() =>
    Promise.resolve({
      games,
      currentPage,
      totalPages,
      availableFilters: availableFilters,
    })
  ),
}))

jest.mock('@/core/hooks/useQueryState', () => ({
  useQueryState: jest.fn(() => ['Action', jest.fn()]),
}))

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

describe('Testing <Home />', () => {
  it('should render the home view with header and catalog', async () => {
    const ui = (await Home({ searchParams: {} })) as React.ReactElement

    const { getByText, getAllByTestId } = render(ui)

    expect(getByText('Top Sellers')).toBeInTheDocument()
    expect(getByText('Genre |')).toBeInTheDocument()
    expect(getAllByTestId('card')).toHaveLength(12)
  })
  it('should render No games available.', async () => {
    games = []

    const ui = (await Home({ searchParams: {} })) as React.ReactElement

    const { getByText } = render(ui)

    expect(getByText('No games available.')).toBeInTheDocument()
  })
  it('should display a loading state while fetching games', async () => {
    isLoading = true

    const ui = (await Home({ searchParams: {} })) as React.ReactElement

    const { getByText } = render(ui)

    expect(getByText('Loading...')).toBeInTheDocument()
  })
  it('should render a button to load more games', async () => {
    totalPages = 3
    currentPage = 1
    isLoading = false

    const ui = (await Home({ searchParams: {} })) as React.ReactElement

    const { getByText } = render(ui)

    expect(getByText('SEE MORE')).toBeInTheDocument()
  })
  it('should not render the load more button if all pages are loaded', async () => {
    totalPages = 1
    currentPage = 1

    const ui = (await Home({ searchParams: {} })) as React.ReactElement

    const { queryByText } = render(ui)

    expect(queryByText('SEE MORE')).not.toBeInTheDocument()
  })
})
