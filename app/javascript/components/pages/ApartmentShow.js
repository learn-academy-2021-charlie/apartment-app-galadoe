import React, {Component} from "react"
import { Container, Row, Col, Card, CardTitle, CardBody, CardText, Button, CardSubtitle} from 'reactstrap'
import mockApartment from '../mockApartment'
import { NavLink, Redirect} from "react-router-dom"

class ApartmentShow extends Component {
  constructor(props){
    super(props)

    this.state = {
      submitted: false
    }
  }

  handleSubmit = (e) => {
    const { apartment } = this.props
    this.props.deleteApartment(apartment.id)
    this.setState({ submitted: true })
  }

  render(){
    const {apartment} = this.props
    return(
      <>
        <div>
          <h2>Apartment Show Page</h2>
          <Card>
            <CardTitle>
              <h3>{`Location: ${apartment && apartment.street}, ${apartment && apartment.city}, ${apartment && apartment.state}`}</h3>
            </CardTitle>
            <CardBody>
              <CardText>{`Want more info, contact ${apartment && apartment.manager} at ${apartment && apartment.email}`}</CardText>
            </CardBody>
            <CardSubtitle>
              { `${apartment && apartment.bedrooms} bedrooms and ${apartment && apartment.bathrooms} baths. Monthly Rent: ${apartment && apartment.price}` }
            </CardSubtitle>
          </Card>
          <Button className="button-style">
            <NavLink to={`/apartmentedit/${apartment.id}`} id="edit-nav">Edit Apartment</NavLink>
          </Button>
          <Button className="button-style" onClick={this.handleSubmit}>
            Delete Apartment
          </Button>

        </div>
            { this.state.submitted && <Redirect to={`/apartmentindex/`} />}
      </>
    )
  }
}
export default ApartmentShow
