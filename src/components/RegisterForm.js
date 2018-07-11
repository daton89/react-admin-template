import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields";
import { required, minLength, maxLength } from "../validation/specific";

import './RegisterForm.css'

class RegisterForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name="firstname"
          component={customInput}
          type="text"
          label="First Name"
          validate={[required]}
        />
        <Field
          name="surname"
          component={customInput}
          type="text"
          label="Surname"
          validate={[required]}          
        />
        <Field
          name="username"
          component={customInput}
          type="text"
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="newsletter"
          component={customInput}
          type="checkbox"
          label="Signup to our Newsletter?"
        />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register"
  // validate
})(RegisterForm);

export default RegisterForm;
