import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Services/api";
import { TableCell, TableRow, Table, TableHead, TableBody, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';


const AllUsers = () => {

    const [user, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async() => {
        const response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id)
        getAllUsers();
    }

    return ( 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map(user => (
                        <TableRow>
                             <TableCell>{user.id}</TableCell>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );


}

export default AllUsers;