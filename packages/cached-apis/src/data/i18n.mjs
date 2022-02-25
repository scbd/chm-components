import locales from './locales.mjs'

export const getLString = (key) => {
  const { messages } = locales
  const   lString    = {}

  for (const lang in messages)
    lString[lang] = messages[lang][key]

  return lString
}
