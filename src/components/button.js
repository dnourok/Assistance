import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SubmitButton extends Component {

  render(){
    return (
          <Button variant="primary">{this.props.buttonText}</Button>
        )
    }
}
