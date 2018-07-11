import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields";

class RegisterForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="name" component={customInput} type="text" label="Name" />
        <Field name="newsletter" component={customInput} type="checkbox" label="Signup to our Newsletter?" />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register"
})(RegisterForm);

export default RegisterForm;
