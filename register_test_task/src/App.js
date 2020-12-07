import './App.css';
import { Component } from 'react';
import firebase from 'firebase';

// class App extends React.Component {
//   render() {
//     return <h1>Привіт, {this.props.name}</h1>;
//   }
// 

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount(){
    const db = firebase.database();
    // console.log(db);
  }

  handleChange = ({target: { value, id}})=>{
    this.setState({
      [id]: value,
    })

    // console.log(value, id);
  };

  createAccount = () => {
    const {email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      this.setState({hasAccount: true})
    }) 
      .catch(error => console.log(error)); 
      // для реестрации
  };

  // logInAccount = () => {
  //   const {email, password} = this.state;
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then(response => {
  //     this.setState({hasAccount: true})
  //   }) 
  //   .catch(error => console.log(error));

  //   // для авторизации
  // };

  render() {
    const { hasAccount } = this.state;
    return (
      <div>
        {
          hasAccount ?
          (
            <div>hello</div>
          ):
            (
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
              onClick={this.createAccount}
              />
            </div>
            )
        } 
        
      </div>
    )
  }
}