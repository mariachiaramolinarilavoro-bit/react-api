import { useState, useEffect } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader.jsx';
import AppMain from './components/AppMain';

function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('https://lanciweb.github.io/demo/api/actors/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActors(data);
      })
  }, []);

  return (
    <>
      <AppHeader />
      <AppMain actors={actors} />
      <AppFooter />
    </>
  )
}

export default App
