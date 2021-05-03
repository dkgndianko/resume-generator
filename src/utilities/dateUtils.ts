export const formatDate = (date: Date, locale: string = 'en-Us'): string => {
    return  date.toLocaleString(locale, {'year': 'numeric', 'month': 'long'});
}