import React, { useState, useEffect } from "react";
import * as client from "./client";
import {
  BsFillCheckCircleFill,
  BsPencil,
  BsPlusCircleFill,
  BsTrash3Fill,
} from "react-icons/bs";

function UserTable() {
  const [users, setUsers] = useState([]);

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });

  const isUserValid = () => {
    return (
      user.username &&
      user.password &&
      user.firstName &&
      user.lastName &&
      user.role
    );
  };

  const createUser = async () => {
    if (isUserValid()) {
      try {
        const newUser = await client.createUser(user);
        setUser({
          username: "",
          password: "",
          role: "USER",
          firstName: "",
          lastName: "",
        });
        setUsers([newUser, ...users]);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="m-4">
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
          <tr>
            <td>
              <input
                value={user.username}
                placeholder="Username"
                className="form-control mb-1"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.password}
                placeholder="Password"
                className="form-control mb-1"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.firstName}
                placeholder="First Name"
                className="form-control mb-1"
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </td>
            <td>
              <input
                value={user.lastName}
                placeholder="Last Name"
                className="form-control mb-1"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </td>
            <td>
              <select
                value={user.role}
                className="form-control mb-1"
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <BsPlusCircleFill onClick={createUser} className="me-2 fs-1" />
              <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 fs-1 text"
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <button className="btn btn-danger me-2">
                <BsTrash3Fill onClick={() => deleteUser(user)} />
              </button>
              <button className="btn btn-secondary me-2">
                <BsPencil onClick={() => selectUser(user)} />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;
