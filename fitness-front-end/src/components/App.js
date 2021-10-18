import { Route, Switch, Link } from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
import Login from "./Login";
import Instructor from "./Instructor";
import InstructorAuth from "./InstructorAuth";



function App() {

    return (
        <div>
            <h1>App.js</h1>

            <Link to="/"> APP </Link>
            <Link to="/login"> LOGIN </Link>
            <Link to="/instructorAuth"> Instructor Authorization</Link>
            <Link to="/instructor"> Instructor </Link>

            <Switch>
                 <Route exact path="/instructorAuth" component={InstructorAuth} /> 
                <Route exact path="/instructor" component={Instructor} /> 
                <Route exact path="/login" component={Login} />
                <Route exact path="/" />
            </Switch>

        </div >
    );
}

export default App;
