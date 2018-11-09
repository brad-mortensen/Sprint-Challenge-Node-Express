import React from 'react';

function Project(props) {
  console.log('project', props)
  return (
    <div className='post-container'>
      <p>{props.project.name}</p>
      <h4>{props.project.description}</h4> 
    </div>
  )
}

export default Project;
