// import { useIntl } from 'react-intl';
// import { useIntl } from 'react-intl';
import English from './en.json';
import French from './fr.json'
// import 'react-intl/locale-data/en'

import {createIntl, createIntlCache} from '@formatjs/intl'

// This is optional but highly recommended
// since it prevents memory leak

export const defaultLang = "en";
const messages: any = {"fr": French, "en": English, "en-US": English};
export const defaultMessages = messages[defaultLang];
// export const intl = useIntl()
export function getMessage(code: string, messages: any = defaultMessages): string {
    return messages[code];
}

export function loadLocale(locale: string) {
    const cache = createIntlCache()

    const intl = createIntl(
      {
        locale: locale,
        messages: messages[locale] || {},
      },
      cache
    )
    return intl
}