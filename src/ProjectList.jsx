import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.img} alt={project.category} />
          <p>{project.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
