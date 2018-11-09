import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import ProjectContainer from './components/projectContainer';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      projects: []
    };
  }
  componentDidMount() {
    axios
    .get('http://localhost:9000/api/projects')
    .then(response => this.setState({ projects: response.data }))
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/projects' render={props =>(<ProjectContainer {...props} projects={this.state.projects} />)}/>
        
      </div>
    );
  }
}
