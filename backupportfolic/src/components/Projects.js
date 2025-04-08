import React from 'react';
import '../styles.css';

const Project = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Projects = () => {
  const projectList = [
    { title: "React App", description: "A web app built with React" },
    { title: "Movie Tracker", description: "An app to track movies" }
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projectList.map((proj, index) => (
        <Project key={index} {...proj} />
      ))}
    </section>
  );
};

export default Projects;
