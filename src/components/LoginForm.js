import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput } from "./fields";
import { required, asyncValidate } from "../validation/specific";

// import './RegisterForm.css'

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name="username"
          component={customInput}
          type="text"
          label="Username"
          validate={[required]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required]}
        />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: "login",
  // validate
  asyncValidate,
  asyncBlurFields: ['username']
})(LoginForm);

export default LoginForm;
