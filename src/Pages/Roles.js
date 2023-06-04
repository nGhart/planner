import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RoleForm from '../Role/Form';
import RoleDisplay from '../Role/RoleDisplay';

class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'Okai',
          role: 'Groomsman',
          id: "qwe21"
        },
        {
          name: 'Armah',
          role: 'Groomsman',
          id: "qwe22"
        },
        {
          name: 'Mensa',
          role: 'Groomsman',
          id: "qwe23"
        },
        {
          name: 'Dede',
          role: 'Bridesmaid',
          id: "qwe24"
        },
        {
          name: 'Korkor',
          role: 'Bridesmaid',
          id: "qwe25"
        },
        {
          name: 'Kai',
          role: 'Bridesmaid',
          id: "qwe26"
        },
        {
          name: 'Atta',
          role: 'Champagne',
          id: "qwe27"
        },
        {
          name: 'Ataa',
          role: 'Champagne',
          id: "qwe28"
        },
        {
          name: 'Tawiah',
          role: 'Gift Table',
          id: "gwer29"
        },
        {
          name: 'Ago',
          role: 'Gift Table',
          id: "qwer30"
        }
      ]
    };
  }
  handleAddUser = (addNewUser) => {
    addNewUser.id = Math.floor(Math.random() * 10000)
    this.setState({
      items: [...this.state.items, addNewUser],
    });
    console.log(this.state.persons);
  }

  deleteUser = id => {
    const remainingUsers = this.state.items.filter((items) => items !== id)
    this.setState({
      items: remainingUsers
    })
  }

  render() {
    return (
      <Container fluid className='everythingButFooter'>
        <Row className='roleSection'>
          <h1>Roles</h1>
          <Col
            xs={12}
            sm={{ span: 8, offset: 2 }}>
            <Row>
              <Col
                xs={12}
                sm={4} >
                <RoleForm
                  newUser={this.handleAddUser} />
              </Col>
              <Col>
                <RoleDisplay
                  items={this.state.items} deleteUser={this.deleteUser} />
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Roles 
