import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class RoleForm
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: "",
                    role: "",
                },
            ]
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.newUser(this.state);
        this.setState({
            name: "",
            role: "",
        });
        console.log(this.state.persons);
    };
    render() {
        return (
            <div className='roleForm'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter Role"
                            name="role"
                            value={this.state.role}
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Button className='roleButton' type="submit">
                        Submit
                    </Button>
                </Form>
                {this.state.persons.map((item) => {
                    return (
                        <div
                            key={item.id}>
                        </div>
                    )
                })}
            </div>
        )
    }
}
