import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GuestForm from '../Component/GuestForm';
import GuestList from '../Component/GuestList';

class Guests extends Component {
    constructor(props) {
    super(props)
    this.state = {
      users: [
          {
            name: 'Kojo Asante',
            number: "0244111111",
            group: "AHS Alumni",
            rsvp: "Yes",
            plusOne: "Yes",
            table: 1,
            id: 're4er56erf'
          },
          {
            name: 'Kobina Asante',
            number: "0244111112",
            group: "XXX Bank",
            rsvp: "No",
            plusOne: "Yes",
            table: 2,
            id: 're4er56erg'
          },
          {
            name: 'Kwaku Asante',
            number: "0244111113",
            group: "Accra Church",
            rsvp: "Maybe",
            plusOne: "No",
            table: 3,
            id: 're4er56erh'
          },
          {
            name: 'Yaw Asante',
            number: "0244111114",
            group: "FHS Alumni",
            rsvp: "Yes",
            plusOne: "No",
            table: 4,
            id: 're4er56eri'
          },
          {
            name: 'Kofi Asante',
            number: "0244111115",
            group: "Men's Group",
            rsvp: "Yes",
            plusOne: "No",
            table: 5,
            id: 're4er56erj'
          },
          {
            name: 'Kwame Asante',
            number: "0244111116",
            group: "UofA Alumni",
            rsvp: "Yes",
            plusOne: "No",
            table: 6,
            id: 're4er56erK'
          },
      ] 
    }}
    addNewUser=(user) => {
      user.id=Math.floor(Math.random()*10000)
      this.setState({
        users: [...this.state.users, user]
      })
    }
    deleteUser=(id)=> {
      let remainingUsers = this.state.users.filter((user) => user.id !== id);
      this.setState({
        users: remainingUsers
      })
    }
    editUser = (id, newInfo) => {
      this.setState({
        users: this.state.users.map(user => (user.id === id)? newInfo : user)
      })
    }
    render() {
    return (
      <>
      <Container fluid className='everythingButFooter guestContainer'>
        <Row className='guests'>
                <GuestForm addUser={this.addNewUser}/>
                
             <GuestList usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} className="invite"/>
       </Row>
      </Container>
      </>
    )
  }
  }

export default Guests