// External
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
//Internal
import FormEntry from "./components/formEntry";
import SubmitButton from "./components/button";
import dictionary from "./utils/dictionary";


export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

  render() {

    return (
        <div>
            <h1>{dictionary.TITLE}</h1>
            <Form>
                <FormEntry
                    type='firstName'
                    placeholder={dictionary.FIRST_NAME}
                    label={dictionary.FIRST_NAME}>
                </FormEntry>
                <FormEntry
                    type='lastName'
                    placeholder={dictionary.LAST_NAME}
                    label={dictionary.LAST_NAME}>
                </FormEntry>
                <FormEntry
                    type='email'
                    placeholder={dictionary.EMAIL_ADDRESS}
                    label={dictionary.EMAIL_ADDRESS}>
                </FormEntry>
            </Form>
            <SubmitButton buttonText={dictionary.SUBMIT}></SubmitButton>
        </div>
    )
  }
}
