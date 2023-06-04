import React, { useState } from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Edit from '../Component/EditGuest';

function Guest(props) {
    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal 
            show={show} 
            onHide={handleClose} 
            dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Edit userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
                </Modal.Body>
            </Modal> 
            
            <Stack>
                <Container>
                    <Row>
                        <Col sm={2}>{props.userInfo.name}</Col>
                        <Col sm={2}>{props.userInfo.number}</Col>
                        <Col sm={2}>{props.userInfo.group}</Col>
                        <Col sm={2}>{props.userInfo.rsvp}</Col>
                        <Col sm={2}>{props.userInfo.plusOne}</Col>
                        <Col sm={2}>
                        <button className='guestListButton' onClick={handleShow}>Edit</button>
                    <button className='guestListButton' onClick={handleDelete}>Delete</button>
                        </Col>
<Col></Col>
                        
                    </Row>
                </Container>                
                
            </Stack>
        </>
    )
}
export default Guest