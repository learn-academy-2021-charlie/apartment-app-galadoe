import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"



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
          <Nav>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentindex">Apartment Index</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew">Add Apartment</NavLink>
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
      </>
    )
  }

}

export default Header
