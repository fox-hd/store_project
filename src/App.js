import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './components/Footer/'
import Home from './components/Home';
import SignUp from './components/sign_up/'
import Cart from './components/Cart/';
import Product from './components/products';
import Search from './components/search/';

function App() {
  return (
    <div>
     <Header />
      <Switch>
        <Route exact path = "/"  component={Home}/>
        <Route  path = "/carrinho" component={Cart}/>
        <Route  path = "/cadastro" component={SignUp}/>
        <Route  path = "/busca" component={Search}/>
        <Route  path = "/produtos/celular-iphone" component={Product}/>
        <Route  path = "/produtos/celular-samsung" component={Product}/>
        <Route  path = "/produtos/celular-xiaomi" component={Product}/>
        <Route  path = "/produtos/notebook-dell" component={Product}/>
        <Route  path = "/produtos/notebook-positivo" component={Product}/>
        <Route  path = "/produtos/notebook-samsung" component={Product}/>
        <Route  path = "/produtos/drone" component={Product}/>
        <Route  path = "/produtos/headphone" component={Product}/>
        <Route  path = "/produtos/teclado" component={Product}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
