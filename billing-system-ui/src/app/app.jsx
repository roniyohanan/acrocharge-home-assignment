import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import AppRouter from './app.router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
