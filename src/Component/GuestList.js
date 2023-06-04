import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Guest from '../Component/Guest';

const GuestList = (props) => {
    return (
        <Container>
            <Row>
                <Col className='guestList'>
                    {props.usersData.map((user) => {
                        return <Guest userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser} />
                    })
                    }
                </Col>
            </Row>
        </Container>
    )
}


export default GuestList;