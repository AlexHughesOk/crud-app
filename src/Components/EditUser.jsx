import { FormGroup, FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { editUser, getUsers } from "../Services/api";

const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
}

const EditUser = () => {
  const [ user, setUser ] = useState(initialValues);
  const { firstName, lastName, username } = user;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
      const response = await getUsers(id);
      setUser(response.data);
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const editUserDetails = async () => {
    await editUser(id, user);
    history.push('/users')
  }

  return (
    <FormGroup>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='firstName' value={firstName} />
      </FormControl>
      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='lastName' value={lastName} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
      </FormControl>
      <Button varient="contained" onClick={() => editUserDetails()}>Update User</Button>
    </FormGroup>
  )
}

export default EditUser;