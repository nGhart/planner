import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col>
                    <p>FAQs</p>
                </Col>
                <Col >
                    <p>Terms of Service</p>
                </Col>
                <Col>
                    <p>Contact Us</p>
                </Col>
            </Row>
            <Row>
                <Col><p className='copyright'>Ⓒ 2022</p></Col>
            </Row>
            <Row className='credit'>
                <span>Photo by <a href="https://unsplash.com/@wenutius?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joel Overbeck</a> on <a href="https://unsplash.com/photos/fGPGd9PFd3w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </span>
            </Row>
        </Container>
    )
}

export default Footer