import React, { Component } from 'react'
import { BrowserRouter as  Router, Route, Switch, NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
<<<<<<< HEAD
<<<<<<< HEAD
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
=======
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import LearnMore from "../pages/LearnMore"
>>>>>>> cbec4080535f7ee9858e65963246b948a4f06c6a
=======

>>>>>>> b5e03f66db7595d4b559d64ff625819d59cc0e8d


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
<<<<<<< HEAD
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
=======
>>>>>>> cbec4080535f7ee9858e65963246b948a4f06c6a
        <Router>
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
            <br/>
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
          </Nav>

        </Router>
      </>
    )
  }

}

export default Header
