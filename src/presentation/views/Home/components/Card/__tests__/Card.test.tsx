import { fireEvent } from '@testing-library/react'

import { render } from '@/configs/tests/helpers'

import { Card } from '../Card'
import { Game } from '@/core/utils/endpoint'

const game = {
  id: '1',
  name: 'Test Game',
  genre: 'Action',
  price: 59.99,
  image: '/test-game.jpg',
} as Game

beforeEach(() => {
  localStorage.clear()
})

describe('Testing <Card />', () => {
  it('should render the card with game details', () => {
    const { getByText, getByAltText } = render(<Card game={game} />)

    expect(getByText('Test Game')).toBeInTheDocument()
    expect(getByText('$59.99')).toBeInTheDocument()
    expect(getByText('Action')).toBeInTheDocument()
    expect(getByAltText('Test Game')).toBeInTheDocument()
  })
  it('should call addToCart when the button is clicked', () => {
    const { getByText } = render(<Card game={game} />)

    const button = getByText('ADD TO CART')

    fireEvent.click(button)

    expect(getByText('Game successfully added')).toBeInTheDocument()
  })
  it('should display truncated game name if it exceeds 20 characters', () => {
    const longGameName = {
      ...game,
      name: 'This is a very long game name that exceeds twenty characters',
    }

    const { getByText } = render(<Card game={longGameName} />)

    expect(getByText('This is a very long ...')).toBeInTheDocument()
  })
  it('should display an error toast if the game is already in the cart', () => {
    const { getByText, queryByText } = render(<Card game={game} />)

    const button = getByText('ADD TO CART')

    fireEvent.click(button)

    expect(queryByText('Game already in cart')).not.toBeInTheDocument()

    fireEvent.click(button)

    expect(getByText('Game already in cart')).toBeInTheDocument()
  })
  it('should display "NEW" label if the game is new', () => {
    const newGame = { ...game, isNew: true }
    const { getByTestId } = render(<Card game={newGame} />)

    expect(getByTestId('new')).toBeInTheDocument()
  })
})
