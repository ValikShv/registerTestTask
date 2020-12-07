import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Link to="/logOut"></Link>
      <Switch>
        <Route>
          <LogOut />
        </Route>
      </Switch>
    </Router>

  );
}

function LogOut() {
  return(
    <Router>
      <div className="wraper">
        <p>
          <span>Login</span>
        </p>
        <p>
          <span>Email</span>
          <input type="text" id="email" /> 
          {/* Как передать инпути в другие функции */}
        </p>
        <p>
          <span>Password</span>
          <input type="password" id="password" />
           {/* как передать инпути в другие функции */}
        </p>
        <p>
          <Link to="/timer">login</Link>
        </p>
        <p>
          <span>Don`t have an account yet?</span>
          <Link to="/Register">Register</Link>
        </p>
        <Switch>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function Register() {
  return(
    <Router>
      <div className="wraper">
        <p>Register</p>
          <ul>
            <li><span>First Name</span><input type="text" id="first_name" /></li>
            <li><span>Last Name</span><input type="text" id="second_name" /></li>
            <li><span>Email</span><input type="text" id="new_email" /></li>
            <li><span>Password</span> <input type="password" id="new_password" /></li>
          </ul>
            <Link to="/timer">Sing up</Link>
          <p>
            <span>Allready register?</span>
            <Link to="/logOut">Log in</Link>
          </p>
      </div>
      <Switch>
        <Route path="/logOut">
          <LogOut />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
      </Switch>
    </Router>
  );
}

function Timer() {


// if (email === "root"){
  // if (password === "root"){
  // тута надо написать сокритие первого окна и откритие след
  // после напиши проверку на пароль/логин
  return (
  <Router>
    <Link to="logOut">Log out</Link>
      <div className="wraper">
        <p>Desktop</p>
        <p>time</p>
      </div>
      <div className="wraper">
        <p>Mobile</p>
        <p>time</p>
      </div>
    <Switch>
      <Route path="/logOut">
        <LogOut />
      </Route>
    </Switch>
    </Router>
  );
// }}

  // else {
  //   return (
  //    <Router>
  //     <Link to="logOut">LogOut</Link>
  //    <Switch>
  //      <Route>
  //       <LogOut />
  //      </Route>
  //    </Switch>
  //    </Router>
    // );
  // }
}

export default App;
