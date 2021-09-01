import React from "react"
import PropTypes from "prop-types"
// import { BrowserRouter as  Router, Route, Switch, NavLink } from "react-router-dom"
//
// import { Nav, NavItem } from "reactstrap"
// import "application.scss"


import Header from "./components/Header"

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
    fetch("http://localhost:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentArray => this.setState({ apartments: apartmentArray}))
    .catch(errors => console.log("Apartment read errors: "), errors)
  }


  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
        <Router>
          <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/apartmentindex"
               render={ (props) => <Apartment apartments={ this.state.apartments } /> } />
             <Route component={ NotFound } />
           </Switch>
        </Router>

      </>
    );
  }
}

export default App
