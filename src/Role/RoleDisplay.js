import React, { Component } from 'react';
import { Col, ListGroup, Row, Container } from 'react-bootstrap';

class RoleDisplay extends Component {
    deleteUser = (e) => {
        e.preventDefault();
        this.props.deleteUser(this.props.items.id);
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.props.items.map((item) => (

                        <Col sm={6} key={item.id} deleteUser={this.props.deleteUser} className='box'>

                            <ListGroup horizontal="sm" className="my-2">
                                <ListGroup.Item className='roleName'>
                                    <span>{item.name}</span></ListGroup.Item>

                                <ListGroup.Item className='roleRole'>
                                    <span>
                                        {item.role}</span>
                                    <span
                                        onClick={() => this.props.deleteUser(item)}
                                        className='deleteIcon'
                                    >
                                        ✖
                                    </span>
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default RoleDisplay;