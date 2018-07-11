import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields";
import {validate} from '../validation'

class RegisterForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="firstname" component={customInput} type="text" label="First Name" />
        <Field name="surname" component={customInput} type="text" label="Surname" />
        <Field name="username" component={customInput} type="text" label="Username" />
        <Field name="newsletter" component={customInput} type="checkbox" label="Signup to our Newsletter?" />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register",
  validate
})(RegisterForm);

export default RegisterForm;
