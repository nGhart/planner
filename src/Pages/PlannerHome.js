import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Todo from '../Component/Reminders'
import Countdown from '../Component/Countdown'
import Invitation from '../Component/Invitation'

function PlannerHome() {
  return (
    <Container fluid className='home'>
      <Row className='everythingButFooter'>
        <Col sm={3} >
          <Countdown />
        </Col>
        <Col sm={5} className='inviteHome'>
          <Invitation />
        </Col>
        <Col sm={4} >
          <Todo />
        </Col>
      </Row>
    </Container>
  )
}

export default PlannerHome