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
            <Route  path = "/produtos/7" component={Product}/>
            <Route  path = "/produtos/8" component={Product}/>
            <Route  path = "/produtos/9" component={Product}/>
            <Route  path = "/produtos/1" component={Product}/>
            <Route  path = "/produtos/2" component={Product}/>
            <Route  path = "/produtos/3" component={Product}/>
            <Route  path = "/produtos/4" component={Product}/>
            <Route  path = "/produtos/6" component={Product}/>
            <Route  path = "/produtos/5" component={Product}/>
          </Switch>
          <Footer/>
      </div>
    
  );
}

export default App;
