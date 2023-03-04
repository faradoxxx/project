import React, { Component, Fragment, } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';


export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
            <div>
              <img className='ecommerceIcon' src={ecommerceIcon} />
            </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
            <div>
              <img className='designIcon' src={designIcon} />
            </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
            <div>
              <img className='webIcon' src={webIcon} />
            </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services