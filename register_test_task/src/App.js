import './App.css';
import { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      needAccount: false,
      logIn: false,
    }
  }

  componentDidMount(){
    const db = firebase.database();
    console.log(db);
  }

  handleChange = ({target: { value, id}})=>{
    this.setState({
      [id]: value,
    })
  }


  // для реестрації

  createAccount = () => {
    const {email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response =>{
      this.setState({ logIn: true })
      .catch(error => console.log(error));
    })
  }

  needAc = () => {
    this.needAc = true;
  }

//   register = () => {
//     return(
//       <div className="wraper">
//       <p>Register</p>
//         <ul>
//           <li><span>First Name</span><input type="text" id="first_name" /></li>
//           <li><span>Last Name</span><input type="text" id="second_name" /></li>
//           <li><span>Email</span><input type="text" id="new_email" /></li>
//           <li><span>Password</span> <input type="password" id="new_password" /></li>
//         </ul>
//           <input type="submit" value="Sing up" onClick=""/>
// {/* напиши функцию Sing up          */}
//         <p>
//           <span>AllgisterFrameready register?</span>
//           <input type="submit" value = "Sing In" onClick="" />
//         </p>
//     </div>
//     );
//   };

  //для авторизації
  
  logInAccount = () => {
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      this.setState({logIn: true})
    }) 
    // .catch(error => console.log(error));
  };


  render(Timer) {
    const { logIn, } = this.state;
    
    const timer =  
        <div className="times_block">
          <div className="wraper">
            <p>Desktop</p>
            <p>time</p>
          </div>
          <div className="wraper">
            <p>Mobile</p>
            <p>time</p>
          </div>
        </div>;
      
      const logOut = 
        <div className="login_block">
          <input 
            type="text" 
            id="email" 
            onChange={this.handleChange} 
          />
          <input 
            type="password" 
            id="password"
            onChange={this.handleChange}
          />
          <input 
            type="submit" 
            value="Login"
            onClick={this.logInAccount}
          />
          <input 
            type="submit"
            value="Register"
            onclick={this.needAc}
          />
        </div>;
      

    return (
      <div>
      {if (logIn = false) {
        <logOut />
      }
      else {
        <timer />
      }
      </div>
    )
  }
}