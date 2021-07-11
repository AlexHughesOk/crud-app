import { FormGroup, FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addUser } from "../Services/api";

const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
}

const AddUser = () => {
  const [ user, setUser ] = useState(initialValues);
  const { firstName, lastName, username } = user;
  const history = useHistory();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const addUserDetails = async () => {
    await addUser(user);
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
      <Button varient="contained" onClick={() => addUserDetails()}>Add New User</Button>
    </FormGroup>
  )
}

export default AddUser;