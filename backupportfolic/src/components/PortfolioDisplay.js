import React from "react";

const PortfolioDisplay = ({ data }) => {
  if (!data || !data.name) return null; 

  return (
    <center>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <div className="experience">
        <h2>Experience</h2>
        <div className="experience-box">
          <strong>Role:{data.role}</strong>
          <p>Company: {data.company}</p>
          <p>Year: {data.year} years of experience</p>
        </div>
      </div>
    </center>
  );
};

export default PortfolioDisplay;
