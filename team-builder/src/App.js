import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from "./Form";

const members = [
  {
    id: uuid(),
    fname: "John",
    lname: "Smith",
    email: "JS@yahoo.com",
    role: "PM"
  },
  {
    id: uuid(),
    fname: "Amy",
    lname: "Lee",
    email: "AmyL@gmail.com",
    role: "Designer"
  }
];

function App() {
  const [member, setMember] = useState(members);
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    role: ""
  });
  const onInputChange = event => {
    //to get what part change ex:fname or lname...
    const inputThatChanged = event.target.name;
    //to get the input value
    const getInput = event.target.value;
    //put the changes into formValue
    setFormValues({ ...formValues, [inputThatChanged]: getInput });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    const newMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role
    };
    setMember([...member, newMember]);
    setFormValues({
      fname: "",
      lname: "",
      email: "",
      role: ""
    })
  };

  return (
    <div className="App">
      <h3>List of members:</h3>
      {member.map(person => (
        <p>
          {person.fname} {person.lname}, {person.email}, {person.role}
        </p>
      ))}
      <Form
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
        formValues={formValues}
      />
    </div>
  );
}

export default App;
