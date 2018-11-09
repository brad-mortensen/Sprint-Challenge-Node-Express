import React, { Component } from 'react'
import Project from './project';

export default class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <div className='posts'>
        {this.props.projects.map((project) => 
          <Project key={project.id} project = {project} />
        )}
      </div>
    );
  }
}
