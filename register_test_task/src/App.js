import './App.css';
import { Component } from 'react';

// class App extends React.Component {
//   render() {
//     return <h1>Привіт, {this.props.name}</h1>;
//   }
// 

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="login_block">
          <input type="text" />
          <input type="password" />
          <input type="submit" />
        </div>
      </div>
    )
  }
}