import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      {/* first name */}
      <label for="fname">
        First Name:{" "}
        <input
          onChange={props.onInputChange}
          placeholder="First Name"
          id="fname"
          name="fname"
          type="text"
          value={props.formValues.fname}
        />
      </label>
      <br />
      {/* last name */}
      <label for="lname">
        Last Name:{" "}
        <input
          onChange={props.onInputChange}
          placeholder="Last Name"
          id="lname"
          name="lname"
          value={props.formValues.lname}
          type="text"
        />
      </label>
      <br />
      {/* Email */}
      <label for="email">
        Email:{" "}
        <input
          onChange={props.onInputChange}
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          value={props.formValues.email}
        />
      </label>
      <br />
      {/* Role */}
      <label for="role">
        Your role:{" "}
        <input
          onChange={props.onInputChange}
          placeholder="Role"
          id="role"
          name="role"
          type="text"
          value={props.formValues.role}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}
export default Form;
