export const getLangFromUrlSearch = (search: string): string => {
  const langParam = search
    .replace(/^\?/, '')
    .split('&')
    .find((param: string) => /^lang=/.test(param.toLowerCase()))

  if (langParam) {
    return langParam.replace(/^lang=/, '')
  }

  return ''
}
