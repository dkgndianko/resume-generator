/* import React from 'react';
import logo from './logo.svg';
import './App.css'; */
// import MarkdownEditor from './MarkdownEditor'
import { Cv } from './components/Cv';
import { cvData } from './testData'

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
        <Cv {...cvData} />
      </header>
    </div>
  );
}

export default App;
