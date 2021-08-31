import React from "react"
import PropTypes from "prop-types"
// import { BrowserRouter as  Router, Route, Switch, NavLink } from "react-router-dom"
//
// import { Nav, NavItem } from "reactstrap"
// import "application.scss"

import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import Home from "./pages/Home"
import Header from "./components/Header"

class App extends React.Component {
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        <br/>
        <br/>
        <Header />

      </React.Fragment>
    );
  }
}

export default App
