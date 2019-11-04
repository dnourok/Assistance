import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class TextField extends Component {

  render(){
    return (
        <Form.Group controlId={this.props.controlId}>
            <Form.Label>{this.props.label}</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        )
    }
}
