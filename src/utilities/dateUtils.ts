export const formatDate = (date: Date, format: Intl.DateTimeFormatOptions = {'year': 'numeric', 'month': 'long'}, locale: string = 'en-Us'): string => {
    return  date.toLocaleString(locale, format);
}