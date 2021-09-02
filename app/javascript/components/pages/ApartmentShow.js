import React, {Component} from "react"
import { Container, Row, Col, Card, CardTitle, CardBody, CardText, Button, CardSubtitle} from 'reactstrap'
import mockApartment from '../mockApartment'

class ApartmentShow extends Component {
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
        </div>

      </>
    )
  }
}
export default ApartmentShow
