import { getDuration } from '../date'

describe('date helper function', () => {
  describe('getDuration', () => {
    it('should get month number with one year', () => {
      const from = '2018/4'
      const to = '2018/7'
      const result = {
        en: '4 months',
        zh: '4 個月',
      }
      expect(getDuration({ from, to, lang: 'en' })).toBe(result.en)
      expect(getDuration({ from, to, lang: 'zh' })).toBe(result.zh)
    })

    it('should get year number over one year', () => {
      const from = '2016/6'
      const to = '2017/10'
      const result = {
        en: '1.4 years',
        zh: '1.4 年',
      }
      expect(getDuration({ from, to, lang: 'en' })).toBe(result.en)
      expect(getDuration({ from, to, lang: 'zh' })).toBe(result.zh)
    })
  })
})
