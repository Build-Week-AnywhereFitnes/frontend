import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
import Header from "./Header";
import Login from "./Login";
import InstructorClasses from "./InstructorClasses";
import InstructorAuth from "./InstructorAuth";
import ClientPage from './ClientPage'


function App() {

  return (
    <div className='AppBox'>

      <Header />

      {/* <<<<<<< HEAD
      <Switch>
        <Route path='/InstructorPage' component={InstructorPage} />
        <Route exact path="/instructorAuth" component={InstructorAuth} />
        <Route exact path="/instructor" component={Instructor} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" />
      </Switch>
======= */}
      <Switch>
        <Route path='/clientPage' component={ClientPage} />
        <Route exact path="/instructorAuth" component={InstructorAuth} />
        <Route exact path="/classes" component={InstructorClasses} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" />
      </Switch>
      {/* >>>>>>> de68cf95eae8f98d119e0398e996224389d4a7fe */}

    </div>
  );
}

export default App;
