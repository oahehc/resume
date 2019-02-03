export const getLangFromUrlSearch = (search: string): string => {
  const result = search
    .replace('?', '')
    .split('&')
    .map((param: string) => {
      const match = param.toLowerCase().match(/lang=(.*)/)

      if (match && match[1]) {
        return match[1]
      }

      return ''
    })
    .filter((param: string) => param)

  if (result && result.length > 0) {
    return result[0]
  }

  return ''
}
