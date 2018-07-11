export const required = value => (value ? undefined : "Value is required");

export const minLength = value =>
  value.length < 4 ? "Value must be at least 4 characters" : undefined;

export const maxLength = value =>
  value.length > 10 ? "Value is too long" : undefined;

export const matchesPassword = (value, allValues) =>
  value !== allValues.password ? "Passwords must match" : undefined;

export const asyncValidate = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  await sleep(1000)
  if (["daton89", "tony"].includes(values.username)) {
    return Promise.reject({
      username: "Username arleady taken"
    });
  }
}