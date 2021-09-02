import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Switch, NavLink } from "react-router-dom"

// import { Nav, NavItem } from "reactstrap"

import Header from "./components/Header"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"


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


  render () {


    return (
      <>
        <Router>
        <br/>
        <br/>

        <Header {...this.props}/>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ AboutUs } />
          <Route path="/learn" component={ LearnMore } />
          <Route path="/apartmentindex" component={ApartmentIndex}/>
          <Route path="/apartmentshow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={apartment} /> }} />
          <Route path="/apartmentnew" render={ (props) => <ApartmentNew createApartment={this.createApartment} /> }/>
        </Switch>
        </Router>


      </>
    );
  }
}

export default App
