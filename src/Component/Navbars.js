import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Navbars = () => {
  return (
    <div className='navigBarP'>
      <Container fluid >
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <Row>
              <Col className='nomargin'>
                <NavLink to="/" activeClassName="active">
                  <button className='navbutton'>
                    Home
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="checklist">
                  <button className='navbutton'>
                    Checklist
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="" to="guests">
                  <button className='navbutton'>
                    Guests
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="wishlist">
                  <button className='navbutton'>
                    Wishlist
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="roles">
                  <button className='navbutton'>
                    Roles
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="seatingchart">
                  <button className='navbutton'>
                    Seating Chart
                  </button>
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbars