import React, { Component } from 'react'
import { BrowserRouter as  Router, Route, Switch, NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"


class Header extends Component {
  render(){
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return(
      <>
      <h1>This is a header</h1>
      {
          logged_in &&
            <div>
              <a href={sign_out_route}>Sign Out</a>
            </div>
        }
        {
          !logged_in &&
            <div>
              <a href={sign_in_route}>Sign In</a>
            </div>
        }
        <Router>
          <br/>
          <Nav>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/learn">Learn More</NavLink>
            </NavItem>
          </Nav>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ AboutUs } />
            <Route path="/learn" component={ LearnMore } />
          </Switch>
        </Router>
      </>
    )
  }

}

export default Header
