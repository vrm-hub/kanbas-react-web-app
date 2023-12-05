import axios from "axios";

const URL = `${process.env.REACT_APP_BASE_URL}/api/users`;

const request = axios.create({
  withCredentials: true,
});

export const signin = async (credentials) => {
  const response = await request.post(`${URL}/signin`, credentials);
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${URL}/account`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await request.put(`${URL}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${URL}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await request.post(`${URL}`, user);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${URL}/${id}`);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await request.delete(`${URL}/${user._id}`);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await request.post(`${URL}/signup`, credentials);
  return response.data;
};

export const signout = async () => {
  const response = await request.post(`${URL}/signout`);
  return response.data;
};
