import { render } from '@/configs/tests/helpers'

import { Footer } from '../Footer'

describe('Testing <Footer />', () => {
  it('should render Footer component', () => {
    const { container } = render(<Footer />)
    expect(container).toBeInTheDocument()
  })
  it('should render LogoIcon', () => {
    const { getByTestId } = render(<Footer />)

    const logo = getByTestId('logo-icon')

    expect(logo).toBeInTheDocument()
  })
})
