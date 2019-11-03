// External
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
//Internal
import SubmitButton from "./components/button";
import dictionary from "./utils/dictionary";


export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

  render() {

    return (
        <div>
            <h1>test</h1>
            <SubmitButton buttonText={dictionary.SUBMIT}></SubmitButton>
        </div>
    )
  }
}
