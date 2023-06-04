import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Check from '../Component/Check';

const Checklist = () => {

  return (
    <Container fluid className='everythingButFooter'>
      <Row className='checklistSection'>
        <h1>Checklist</h1>
        <Col className='checklistContainer'>
          <Check />
        </Col>
      </Row>
    </Container>
  )
}

export default Checklist