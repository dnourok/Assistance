// External
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
//Internal
import FormField from "./components/formField";
import SubmitButton from "./components/button";
import DropDown from "./components/dropDown"
import CheckBox from "./components/checkBox"
import TextField from "./components/textField"
import Header from "./components/header"
import dictionary from "./utils/dictionary";


export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

  render() {

    return (
        <div>
            <Header title={dictionary.TITLE}/>
            <Form>
                <FormField
                    type={dictionary.FIRST_NAME}
                    placeholder={dictionary.FIRST_NAME}
                    label={dictionary.FIRST_NAME}
                />
                <FormField
                    type={dictionary.LAST_NAME}
                    placeholder={dictionary.LAST_NAME}
                    label={dictionary.LAST_NAME}
                />
                <FormField
                    type={dictionary.EMAIL_ADDRESS}
                    placeholder={dictionary.EMAIL_ADDRESS}
                    label={dictionary.EMAIL_ADDRESS}
                />
                <DropDown/>
                <TextField/>
                <CheckBox label={dictionary.PRIVACY_POLICY}/>
            </Form>
            <SubmitButton buttonText={dictionary.SUBMIT}/>
        </div>
    )
  }
}
