import React from 'react';
import Routes from './routes';
import { Provider } from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
