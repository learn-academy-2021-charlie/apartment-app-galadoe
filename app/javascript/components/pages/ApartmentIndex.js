import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink, Button} from 'reactstrap'
import { NavLink} from "react-router-dom"

class ApartmentIndex extends Component{

  render(){
    console.log(this.props.apartments);
    return(
      <>
        <div>
          <h2>This is the Apartment Index Page</h2>
          <br />
          <Col sm="6">
            {this.props.apartments && this.props.apartments.map(apartment => {
              return(
                <Card body className="text-center" key={ apartment.id }>
                            <CardTitle>
                                <h4>{ `Address: ${apartment.street}, ${apartment.city}, ${apartment.state}` }</h4>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                { `${apartment.bedrooms} bedrooms and ${apartment.bathrooms} baths. Monthly Rent: ${apartment.price}` }
                            </CardSubtitle>
                              <NavLink to={`/apartmentshow/${apartment.id}`}>More Details
                              </NavLink>
                        </Card>
              )
            })}
          </Col>
        </div>
      </>
    )
  }
}
export default ApartmentIndex
