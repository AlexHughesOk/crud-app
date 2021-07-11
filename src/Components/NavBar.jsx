import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})


const NavBar = () => {
    const classes  = useStyle();
    return (
       <AppBar className={classes.header} position="staticcc" >
           <Toolbar>
               <NavLink className={classes.tabs} to="./" exact>Asset Insights - Developer Coding Test</NavLink>
               <NavLink className={classes.tabs} to ="/users" exact>All Users</NavLink>
               <NavLink className={classes.tabs} to = "/add-user" exact>Add New User</NavLink>
           </Toolbar>
       </AppBar>
    )
}

export default NavBar;