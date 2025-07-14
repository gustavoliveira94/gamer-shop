export const createSearchParamsCache = jest.fn(() => ({
  parse: jest.fn(() => ({
    genre: '',
  })),
}))

export const parseAsString = {
  withDefault: jest.fn(),
}
