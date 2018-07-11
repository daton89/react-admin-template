export const validate = values => {
  const errors = {};

  if (!values.firstname) errors.firstname = "Fistname is required";

  if (!values.surname) errors.surname = "Surname is required";

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 4) {
    errors.username = "Username must be at least 4 character long";
  } else if (values.username.length > 10) {
    errors.username = "Username is too long";
  }

  return errors;
};
