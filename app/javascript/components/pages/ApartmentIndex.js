import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink } from 'reactstrap'

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
                            <CardBody>
                                <CardText>{ `For more info please contact ${apartment.manager} at ${apartment.email}` }</CardText>
                            </CardBody>
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
