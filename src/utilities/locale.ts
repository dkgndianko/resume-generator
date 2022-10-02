import {shouldPolyfill} from '@formatjs/intl-locale/should-polyfill'
export async function polyfill() {
  // This platform already supports Intl.Locale
  if (shouldPolyfill()) {
    console.log("Dougg naa de!")
    await import('@formatjs/intl-locale/polyfill')
  }
  else {
    console.log("Nothing to polyfill")
  }
}
