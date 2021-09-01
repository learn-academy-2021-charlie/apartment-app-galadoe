import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle } from 'reactstrap'

class ApartmentIndex extends Component{
  render(){
    return(
      <>
        <div>
          <h2>This is the Apartment Index Page</h2>
          <br />
          <Col sm="6">
            {this.props.apartments.map(apartment => {
              return(
                <Card body key={ apartment.id }>
                  <CardTitle>
                    <h4>{apartment.street}</h4>
                  </CardTitle>
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
