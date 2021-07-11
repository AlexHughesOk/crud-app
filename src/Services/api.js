import axios from "axios";

const url = "https://localhost:44371/api/Users";

export const getUsers = (id) => {
  id = id || '';
  return axios.get(`${url}/${id}`);
}

export const addUser = async(user) => {
  return axios.post(url, user);
}

export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
}

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`)
}