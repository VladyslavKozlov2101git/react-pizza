import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas';



function App({ items}) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log()
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas))
    });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          {console.log("777777",items)}
          <Route path="/" render={() => <Home items={items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </Routes>

      </div>
    </div>
  )
}

export default App;
