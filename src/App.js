import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div>
     <Header />
      <Switch>
        <Route exact path = "/"><Home /></Route>
        <Route  path = "/product"><Product /></Route>
        <Route  path = "/cart"><Cart /></Route>
      </Switch>
    </div>
  );
}

export default App;
