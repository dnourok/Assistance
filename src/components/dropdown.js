import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class DropDown extends Component {

  render(){
    return (
        <Form.Group controlId={this.props.controlId}>
            <Form.Label>{this.props.label}</Form.Label>
            <Form.Control as="select">
                <option>TODO: return</option>
                <option>TODO: return</option>
                <option>TODO: return</option>
                <option>TODO: return</option>
                <option>TODO: return</option>
            </Form.Control>
        </Form.Group>
        )
    }
}
