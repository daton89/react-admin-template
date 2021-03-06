import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import capitalize from 'capitalize'
import { customInput, customSelect, discounts } from "./fields";
import { required, minLength, maxLength, matchesPassword, asyncValidate } from "../validation/specific";

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
          normalize={capitalize}
        />
        <Field
          name="surname"
          component={customInput}
          type="text"
          label="Surname"
          validate={[required]}          
          normalize={capitalize}
        />
        <Field
          name="username"
          component={customInput}
          type="text"
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required]}
        />
        <Field
          name="confirmPassword"
          component={customInput}
          type="password"
          label="Confirm Password"
          validate={[required, matchesPassword]}
        />
        <Field
          name="newsletter"
          component={customInput}
          type="checkbox"
          label="Signup to our Newsletter?"
        />
        <FieldArray name="discountCodes" component={discounts} />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register",
  // validate
  asyncValidate,
  asyncBlurFields: ['username']
})(RegisterForm);

export default RegisterForm;
