import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import open from '../images/images.png'

function Wishlist() {
  const partners = [
    {
      img: open,
      store: "Furniture Store",
      link: "https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9",
      id: 1
    },
    {
      img: open,
      store: "General Store",
      link: "https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9",
      id: 2
    },
    {
      img: open,
      store: "Appliance Store",
      link: "https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9",
      id: 3
    },
    {
      img: open,
      store: "General Store",
      link: "https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9",
      id: 4
    },
    {
      img: open,
      store: "Just a Store",
      link: "https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9",
      id: 5
    },
  ]
  return (
    <Container fluid className='everythingButFooter'>
      <Row className='wishlistSection'>
        {partners.map((store) => (
          <Col>
            <Card className='card'>
              <Card.Img variant="top" className='cardImage' src={store.img} />
              <Card.Body>
                <Card.Title>{store.store}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Card.Text>
                <a href={store.link}
                  target="_blank" rel="noreferrer"
                ><Button className='wishlistButton'>Go to Wishlist</Button></a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Wishlist