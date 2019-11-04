
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class CheckBox extends Component {

  render(){
    return (
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={this.props.label} />
        </Form.Group>
        )
    }
}
