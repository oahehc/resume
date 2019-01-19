import { defaultLang } from '../Context/Context'

type durationInputType = {
  from: string
  to: string
  lang?: string
}
export const getDuration = ({
  from,
  to,
  lang = defaultLang,
}: durationInputType): string => {
  const oneMonth = 60 * 60 * 24 * 30 * 1000
  const fromTime = new Date(from).getTime()
  const toTime = to === 'now' ? Date.now() - oneMonth : new Date(to).getTime()
  const timeBetween = toTime - fromTime
  const year = timeBetween / 1000 / 60 / 60 / 24 / 365

  if (year < 1) {
    return `${(year * 12 + 1).toFixed(0)} ${lang === 'en' ? 'months' : '個月'}`
  }

  return `${(year + 1 / 12).toFixed(1)} ${lang === 'en' ? 'years' : '年'}`
}
