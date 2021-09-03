import React, { Component } from "react"
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ApartmentNew extends Component {
  constructor(props){
    super(props)

    this.state = {
      form:{
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: 0,
        bathrooms: 0,
        pets: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form})
  }

  handleSubmit = () => {
    this.props.createApartment(this.state.form)
    this.setState({ submitted: true })
  }

  render(){
    return(
      <>
        <div>
          <h3>Add Apartment</h3>
          <Form>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input type="text"
              name="street"
              onChange={this.handleChange}
              value={this.state.form.street}
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.form.city}
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.form.state}
              />
            </FormGroup>
            <FormGroup>
              <Label for="manager">Manager</Label>
              <Input type="text"
              name="manager"
              onChange={this.handleChange}
              value={this.state.form.manager}
              />
            </FormGroup>
            <FormGroup>
              <Label for="emai;">E-mail</Label>
              <Input type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.form.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="text"
              name="price"
              onChange={this.handleChange}
              value={this.state.form.price}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bedrooms">Bedrooms</Label>
              <Input type="integer"
              name="bedrooms"
              onChange={this.handleChange}
              value={this.state.form.bedrooms}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bathrooms">Bathrooms</Label>
              <Input type="integer"
              name="bathrooms"
              onChange={this.handleChange}
              value={this.state.form.bathrooms}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pets">Pets</Label>
              <Input type="text"
              name="pets"
              onChange={this.handleChange}
              value={this.state.form.pets}
              />
            </FormGroup>
          </Form>
        </div>

        <div className = "button">
          <button name="submit" onClick={this.handleSubmit}>
            Add New Apartment
          </button>
        </div>

        {this.state.submitted && <Redirect to="/apartmentIndex" />}
      </>
    )
  }
}
export default ApartmentNew
