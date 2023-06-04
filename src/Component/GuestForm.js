import React, { Component } from 'react'

import { Col, Container, Row } from 'react-bootstrap';
class GuestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: "",
            group: "",
            rsvp: "",
            plusOne: "",
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            number: "",
            group: "",
            rsvp: "",
            plusOne: "",
        })
    }
    render() {
        return (
            <div
                className='top'>
                <form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row>
                            <Col>
                                <input className='guestName'
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </Col>
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
                            <Col>
                                <button className='guestListButton' >Submit</button>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        )
    }
}

export default GuestForm