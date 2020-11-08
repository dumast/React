import React from 'react';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Home from './Views/Home.js'
import About from './Views/About.js'
import Product from './Views/Product.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div>

      <Router>

        <Header/>

        <div className="p-3">
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/products:id">
              <Product/>
            </Route>


          </Switch>
        </div>

        <Footer/>

      </Router>

    </div>
  );
}

export default App;
