import { useState, useEffect } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader.jsx';
import AppMain from './components/AppMain';

function App() {

  useEffect(() => {
    fetch('https://lanciweb.github.io/demo/api/actors/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, []);

  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  )
}

export default App
