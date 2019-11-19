import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GrobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GrobalStyle />
    </BrowserRouter>
  );
}

export default App;
