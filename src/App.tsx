/* import React from 'react';
import logo from './logo.svg';
*/
// import MarkdownEditor from './MarkdownEditor'
import { IntlProvider } from 'react-intl';
import './App.css';


import { Cv } from './components/Cv/Cv';
import { getCVData } from './dkgndianko.resume';

import {loadFontAwesome} from './faLoader';
import { defaultLang, defaultMessages } from './locales/LocalProvider';


loadFontAwesome()

function App () {
  return (
    <IntlProvider locale={defaultLang} messages={defaultMessages}>
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
