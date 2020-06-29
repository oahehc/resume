import { getLangFromUrlSearch } from '../regex'

describe('getLangFromUrlSearch', () => {
  it("should get empty string if didn't have search string", () => {
    const search = ''

    expect(getLangFromUrlSearch(search)).toBe('')
  })

  it('should get empty string if not contain lang in search string', () => {
    const search = '?query=react'

    expect(getLangFromUrlSearch(search)).toBe('')
  })

  it('should get correct lang with single search condition', () => {
    const search = '?lang=us'

    expect(getLangFromUrlSearch(search)).toBe('us')
  })

  it('should get correct lang with multiple search condition', () => {
    const search = '?query=react&lang=us'

    expect(getLangFromUrlSearch(search)).toBe('us')
  })
})
