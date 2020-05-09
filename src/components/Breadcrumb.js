import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../Home"
import Menu from './Menu';

import About from '../About';
import Contact from '../Contact';
import Categories from "../Categories"
class Breadcrumb extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
		 <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/categories'} className="nav-link">Categories</Link></li>

          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' component={Menu} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/categories' component={Categories} />

          </Switch>
        </div>
      </Router>
  		)
	}

}
export default Breadcrumb