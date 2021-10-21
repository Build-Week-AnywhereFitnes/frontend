import {Route, Switch, Link} from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
import Header from "./Header";
import Login from "./Login";
import Instructor from "./Instructor";
import InstructorAuth from "./InstructorAuth";
import ClientPage from './ClientPage'


function App() {

  return (
      <div>

        <Header/>

        <Switch>
          <Route path='/clientPage' component={ClientPage}/>
          <Route exact path="/instructorAuth" component={InstructorAuth}/>
          <Route exact path="/instructor" component={Instructor}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/"/>
        </Switch>

      </div>
  );
}

export default App;
