import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Switch, NavLink } from "react-router-dom"

// import { Nav, NavItem } from "reactstrap"

import Header from "./components/Header"
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentEdit from "./pages/ApartmentEdit"
import NotFound from "./pages/NotFound"


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

  //index fetch
  apartmentIndex = () => {
    fetch("/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentArray => this.setState({ apartments: apartmentArray}))
    .catch(errors => console.log("Apartment read errors: ", errors))
  }


  //create a fetch
  createApartment = (newApartment) => {
    fetch("http://localhost:3000/apartments", {
        body: JSON.stringify(newApartment),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      .then(response => response.json())
      .then(payload => this.apartmentIndex())
      .catch(errors => console.log("Apartment create errors: ", errors))
  }

  //update fetch 
  updateApartment = (apartment) => {
    fetch(`/apartments/${apartments.id}`, {
        body: JSON.stringify(apartment),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => response.json())
      .then(payload => this.apartmentIndex())
      .catch(errors => console.log("Apartment update error: ", errors))
  }

  render () {


    return (
      <>
        <Router>
        <br/>
        <br/>

        <Header {...this.props}/>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={ this.state.apartments} />} />
          <Route path="/apartmentshow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={apartment} /> }} />
          <Route path="/apartmentnew" render={ (props) => <ApartmentNew createApartment={this.createApartment} /> }/>
          <Route path="/apartmentedit/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentEdit apartment={apartment} />  }} />
          <Route component={NotFound} />
        </Switch>
        </Router>


      </>
    );
  }
}

export default App
