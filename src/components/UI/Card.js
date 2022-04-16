import React, { useState } from "react";
import AddUser from "../Users/AddUser";
import UserList from "../Users/UserList";
const Card = () => {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    uuid: "",
  });
  const [theme, setTheme] = useState("light");
  const handleAddEditUser = (user) => {
    const editUser = users.find((u) => u.uuid === user.uuid);
    if (editUser) {
      const newUsers = users.map((u) =>
        u.uuid === user.uuid ? { ...user } : u
      );
      setUsers(newUsers);
    } else {
      user.uuid = Math.random().toString();
      setUsers([...users, user]);
    }
    setFormValues({ firstname: "", lastname: "", email: "", uuid: "" });
  };
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.uuid !== id));
  };
  const handleEdit = (id) => {
    const editUser = users.find((user) => user.uuid === id);
    setFormValues({ ...editUser });
  };
  const handleThemeSwitch = () => {
    var html = document.getElementById("main_html");
    // console.log(html);
    setTheme(theme === "light" ? "dark" : "light");
    html.setAttribute("data-theme", theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <main className="container">
        <article>
          <header>
            <h1>User Management</h1>
            <AddUser addUser={handleAddEditUser} formValues={formValues} />
          </header>
          <UserList
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            allUsers={users}
          />
          <footer>
            <button
              className="contrast switcher theme-switcher"
              aria-label="Switch Theme"
              onClick={handleThemeSwitch}
            >
              <i>Switch Theme</i>
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default Card;
