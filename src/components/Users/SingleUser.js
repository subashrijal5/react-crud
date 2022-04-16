import React from "react";
const SignleUser = (props) => {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.user.firstname}</td>
      <td>{props.user.lastname}</td>
      <td>{props.user.email}</td>
      <td>
        <button
          onClick={() => props.handleEdit(props.user.uuid)}
          className="primary"
        >
          Edit
        </button>
        <button
          onClick={() => props.handleDelete(props.user.uuid)}
          className="secondary"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SignleUser;
