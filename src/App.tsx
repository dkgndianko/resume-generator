/* import React from 'react';
import logo from './logo.svg';
*/
// import MarkdownEditor from './MarkdownEditor'
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSuitcase, faUser, faMapMarker, faAt, faMobile } from '@fortawesome/free-solid-svg-icons'

import { Cv } from './components/Cv/Cv';
import { cvData } from './testData';

library.add(faCheckSquare, faCoffee, faSuitcase, faUser, faMapMarker, faAt, faMobile);


function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a> */}
        {/* <MarkdownEditor /> */}
      </header>
      <div className='App-container'>
        <Cv {...cvData} />
      </div>
    </div>
  );
}

export default App;
