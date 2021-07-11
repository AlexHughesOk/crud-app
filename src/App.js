import NavBar from "./Components/NavBar";
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import EditUser from "./Components/EditUser";

function App() {
  return (
  <BrowserRouter>
    <NavBar />
    <Switch> 
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={AllUsers} />
    <Route exact path="/add-user" component={AddUser} />
    <Route exact path="/edit/:id" component={EditUser} />
    </Switch>
  </BrowserRouter>

  );
}

export default App;
