
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Protfolio from './pages/Protfolio';
import Notfound from './pages/Notfound';
import { Switch } from 'react-router-dom';
import Search from './pages/Search';
import Login from './pages/Login';



class Router extends Component {
    render() {
        return (
            <div> <Switch>
               <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/services" component={Services}/>
              <Route exact  path="/contact" component={Contact}/>
              <Route exact  path="/protfolio" component={Protfolio}/>
              <Route  path="/search/:username" component={Search}/>
              <Route  path="/login" component={Login}/>
              <Route component={Notfound}/></Switch>

            </div>
        );
    }
}

export default Router;