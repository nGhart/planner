import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            number: props.userInfo.number,
            group: props.userInfo.group,
            rsvp: props.userInfo.rsvp,
            plusOne: props.userInfo.plusOne,
            id: props.userInfo.id,
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    handleEdit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state);
        this.setState({
            name: "",
            number: "",
            group: "",
            rsvp: "",
            plusOne: "",
            id: "",
        });
        this.props.closeModal()
    }
    render() {
        return (
            <Container>
                <Row>
                    <form onSubmit={this.handleEdit}>
                        <Col> <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        /></Col>
                        <Col>
                            <input
                                className='guestNumber'
                                type="text"
                                name="number"
                                placeholder='Number'
                                value={this.state.number}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col>
                            <input
                                className='guestGroup'
                                type="text"
                                name="group"
                                placeholder='Group'
                                value={this.state.group}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col>
                            <input
                                className='guestRSVP'
                                type="text"
                                name="rsvp"
                                placeholder='RSVP'
                                value={this.state.rsvp}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col>
                            <input
                                className='guestPlusOne'
                                type="text"
                                name="plusOne"
                                placeholder='Plus one'
                                value={this.state.plusOne}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col><button className='button' >Save</button></Col>
                    </form>
                </Row>
            </Container>
        )
    }
}

export default Edit