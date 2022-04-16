import React from "react";
import SignleUser from "./SingleUser";
const UserList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.allUsers.length === 0 && (
          <tr>
            <td colSpan="4">No users Found.</td>
          </tr>
        )}
        {props.allUsers.map((user, index) => {
          return (
            <SignleUser
              handleDelete={props.handleDelete}
              handleEdit={props.handleEdit}
              user={user}
              key={user.uuid}
              index={index + 1}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
