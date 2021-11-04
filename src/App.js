import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </Routes>

      </div>
    </div>
  );
}

export default App;
