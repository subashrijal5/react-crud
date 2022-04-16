import React, { useState } from "react";
const AddUser = (props) => {
  const [invalid, setInvalid] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const user = {
      firstname: data.get("firstname"),
      email: data.get("email"),
      lastname: data.get("lastname"),
      uuid: data.get("uuid"),
    };
    let validated = validateForm(user);
    if (validated) {
      props.addUser(user);
      form.reset();
      setInvalid({ firstname: "", lastname: "", email: "" });
    }
  };

  const validateForm = (user) => {
    let result = true;
    let formFields = { ...invalid };
    if (user.firstname === "") {
      formFields.firstname = true;
    } else {
      formFields.firstname = false;
    }
    if (user.lastname === "") {
      formFields.lastname = true;
    } else {
      formFields.lastname = false;
    }
    if (user.email === "") {
      formFields.email = true;
    } else {
      formFields.email = false;
    }
    let values = Object.keys(formFields).map((k) => {
      return result === formFields[k];
    });
    setInvalid(formFields);
    return values.includes(true) ? false : true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <input
          type="hidden"
          name="uuid"
          defaultValue={props.formValues.uuid}
        ></input>
        <label htmlFor="firstname">
          First name
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First name"
            aria-invalid={invalid.firstname}
            defaultValue={props.formValues.firstname}
          />
        </label>

        <label htmlFor="lastname">
          Last name
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last name"
            aria-invalid={invalid.lastname}
            defaultValue={props.formValues.lastname}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            aria-invalid={invalid.email}
            defaultValue={props.formValues.email}
          />
        </label>
      </div>
      <small>We'll never share your email with anyone else.</small>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUser;
