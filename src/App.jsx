import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import './App.css';

export default class App extends Component {
  /*
  //Below is an example of how to call the node js backend
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
     fetch(`/api/database`)
            .then(response => response.json())
            .then(state => this.setState(state));
  }
  //This would then go into the render function in this example
  <p>{this.state.greeting}</p>
*/

  render = () => (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}
