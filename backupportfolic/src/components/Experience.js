import React from 'react';
import '../styles.css';

const Experience = ({ data }) => {
  return (
    <div className="container">
      <h3>Past Experience</h3>
      {data.map((exp, index) => (
        <div key={index} className="card">
          <h4>{exp.role}</h4>
          <p>{exp.company}</p>
          <p>{exp.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
