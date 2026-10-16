/* import React from 'react';
import logo from './logo.svg';
*/
// import MarkdownEditor from './MarkdownEditor'
import { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';


import { Cv } from './components/Cv/Cv';
import { getCVData, defaultCvData } from './dkgndianko.resume';
import { loadResumeDataFromFile, loadResumeDataFromString, isValidResumeData } from './utilities/resumeJsonLoader';

import {loadFontAwesome} from './faLoader';
import { defaultLang, loadLocale } from './locales/LocalProvider';
import { polyfill } from './utilities/locale';


loadFontAwesome()
const loc = loadLocale(defaultLang)

function App () {
  polyfill()
  const [cvData, setCvData] = useState(defaultCvData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadExternalData() {
      // Check for URL parameter first
      const params = new URLSearchParams(window.location.search);
      let dataUrl = params.get('data');
      
      // If no URL parameter, check for injected global data (used for PDF generation)
      if (!dataUrl && window.__RESUME_DATA__) {
        try {
          const data = loadResumeDataFromString(JSON.stringify(window.__RESUME_DATA__));
          if (isValidResumeData(data)) {
            setCvData(data);
            return;
          }
        } catch (err) {
          console.error('Failed to parse injected resume data:', err);
        }
      }
      
      if (dataUrl) {
        setLoading(true);
        setError(null);
        try {
          const data = await loadResumeDataFromFile(dataUrl);
          if (isValidResumeData(data)) {
            setCvData(data);
          } else {
            throw new Error('Invalid resume data structure');
          }
        } catch (err) {
          console.error('Failed to load external resume data:', err);
          setError(err instanceof Error ? err.message : 'Failed to load resume data');
          // Fall back to default data
          setCvData(defaultCvData);
        } finally {
          setLoading(false);
        }
      }
    }
    
    loadExternalData();
  }, []);

  if (error) {
    console.error('Resume data loading error:', error);
  }

  return (
    // @ts-ignore 
    <IntlProvider locale={loc.locale} messages={loc.messages || {}} defaultLocale={loc.defaultLocale}>
    <div className='App'>
      <header className='App-header'>
      </header>
      <div className='App-container'>
        {loading && <div className="loading">Loading resume data...</div>}
        {error && <div className="error">Error loading resume data: {error}. Using default data.</div>}
        <Cv {...cvData} />
      </div>
    </div>
    </IntlProvider>
  );
}

export default App;
