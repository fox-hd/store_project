import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Celular1 from './components/products/celular-iphone'
import Celular2 from './components/products/celular-samsung'
import Celular3 from './components/products/celular-xiaomi'
import Notebook1 from './components/products/notebook-dell'
import Notebook2 from './components/products/notebook-positivo'
import Notebook3 from './components/products/notebook-samsung'
import Drone from './components/products/drone'
import Headphone from './components/products/headphone'
import Teclado from './components/products/teclado'

function App() {
  return (
    <div>
     <Header />
      <Switch>
        <Route exact path = "/"><Home /></Route>
        <Route  path = "/cart"><Cart /></Route>
        <Route  path = "/produtos/celular-iphone"><Celular1 /></Route>
        <Route  path = "/produtos/celular-samsung"><Celular2 /></Route>
        <Route  path = "/produtos/celular-xiaomi"><Celular3 /></Route>
        <Route  path = "/produtos/notebook-dell"><Notebook1 /></Route>
        <Route  path = "/produtos/notebook-positivo"><Notebook2 /></Route>
        <Route  path = "/produtos/notebook-samsung"><Notebook3 /></Route>
        <Route  path = "/produtos/drone"><Drone /></Route>
        <Route  path = "/produtos/headphone"><Headphone /></Route>
        <Route  path = "/produtos/teclado"><Teclado /></Route>
      </Switch>
    </div>
  );
}

export default App;
