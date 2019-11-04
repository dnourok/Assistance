// External
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
//Internal
import FormField from "./components/formField";
import SubmitButton from "./components/button";
import DropDown from "./components/dropDown"
import CheckBox from "./components/checkBox"
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
                <FormField
                    type='firstName'
                    placeholder={dictionary.FIRST_NAME}
                    label={dictionary.FIRST_NAME}
                />
                <FormField
                    type='lastName'
                    placeholder={dictionary.LAST_NAME}
                    label={dictionary.LAST_NAME}
                />
                <FormField
                    type='email'
                    placeholder={dictionary.EMAIL_ADDRESS}
                    label={dictionary.EMAIL_ADDRESS}
                />
                <DropDown/>
                <CheckBox label={dictionary.PRIVACY_POLICY}/>
            </Form>
            <SubmitButton buttonText={dictionary.SUBMIT}/>
        </div>
    )
  }
}
