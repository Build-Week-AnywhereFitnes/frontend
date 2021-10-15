import { Route, Switch, Link } from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
import Login from "./Login";




function App() {

    return (
        <div>
            <h1>App.js</h1>

            <Link to="/"> APP </Link>
            <Link to="/login"> LOGIN </Link>

            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" />
            </Switch>

        </div >
    );
}

export default App;
