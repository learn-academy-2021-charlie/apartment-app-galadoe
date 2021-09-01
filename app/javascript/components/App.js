import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Switch, NavLink } from "react-router-dom"

// import { Nav, NavItem } from "reactstrap"


import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ApartmentIndex from "./pages/ApartmentIndex"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  //render index with updated apartment array
  componentDidMount(){
    this.apartmentIndex()
  }

  apartmentIndex = () => {
    fetch("/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentArray => this.setState({ apartments: apartmentArray}))
    .catch(errors => console.log("Apartment read errors: ", errors))
  }


  render () {

    return (
      <>
        <Router>
        <Header {...this.props}/>
          
        </Router>

      </>
    );
  }
}

export default App
