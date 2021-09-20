import 'intl/locale-data/jsonp/en';
const DEFAULT_FORMAT: Intl.DateTimeFormatOptions = {'year': 'numeric', 'month': 'long'};
const DEFAULT_LOCALE: string = 'en-Us';

export const formatDate = (date: Date, format: Intl.DateTimeFormatOptions = DEFAULT_FORMAT, locale: string = DEFAULT_LOCALE): string => {
    // return Intl.DateTimeFormat(locale, format).format(date);
    return  date.toLocaleString(locale, format);
}