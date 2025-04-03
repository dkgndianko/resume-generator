/* import React from 'react';
import logo from './logo.svg';
*/
// import MarkdownEditor from './MarkdownEditor'
import { IntlProvider } from 'react-intl';
import './App.css';


import { Cv } from './components/Cv/Cv';
import { getCVData } from './dkgndianko.resume';

import {loadFontAwesome} from './faLoader';
import { defaultLang, loadLocale } from './locales/LocalProvider';
import { polyfill } from './utilities/locale';


loadFontAwesome()
const loc = loadLocale(defaultLang)

function App () {
  polyfill()
  return (
    // @ts-ignore 
    <IntlProvider locale={loc.locale} messages={loc.messages || {}} defaultLocale={loc.defaultLocale}>
    <div className='App'>
      <header className='App-header'>
      </header>
      <div className='App-container'>
        <Cv {...getCVData(defaultLang)} />
      </div>
    </div>
    </IntlProvider>
  );
}

export default App;
