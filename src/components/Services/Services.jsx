import React, { Component, Fragment, } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';


export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>MY SERVICES</h1>
            <div className='bottom'></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
            <div className='serviceCard text-center'>
              <img className='ecommerceIcon' src={ecommerceIcon} />
              <h2 className='serviceName'>Ecommerce</h2>
              <p className='serviceDescription'>It takes more than one sale to get successful.</p>
            </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
            <div className='serviceCard text-center'>
              <img className='designIcon' src={designIcon} />
              <h2 className='serviceName'>Web Design</h2>
              <p className='serviceDescription'> Let us help you increase your online presence.</p>
            </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
            <div className='serviceCard text-center'>
              <img className='webIcon' src={webIcon} />
              <h2 className='serviceName'>Web Development</h2>
              <p className='serviceDescription'>Where imagination meets creativity</p>
            </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services
