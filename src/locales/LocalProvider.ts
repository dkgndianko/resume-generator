// import { useIntl } from 'react-intl';
import English from './en.json';
import French from './fr.json'

export const defaultLang = "en";
const messages = {"fr": French, "en": English};
export const defaultMessages = messages[defaultLang];
// export const intl = useIntl()
export function getMessage(code: string, messages: any = defaultMessages): string {
    return messages[code];
}