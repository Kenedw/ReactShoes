import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GrobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GrobalStyle />
    </BrowserRouter>
  );
}

export default App;
