/* import React from 'react';
import logo from './logo.svg';
*/
// import MarkdownEditor from './MarkdownEditor'
import './App.css';


import { Cv } from './components/Cv/Cv';
import { cvData } from './dkgndianko.resume';

import {loadFontAwesome} from './faLoader';


loadFontAwesome()

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
      </header>
      <div className='App-container'>
        <Cv {...cvData} />
      </div>
    </div>
  );
}

export default App;
