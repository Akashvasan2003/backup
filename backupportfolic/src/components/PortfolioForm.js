import React, { useState } from "react";

const PortfolioForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role || !company || !year || !bio) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit({ name, role, company, year, bio });
  };

  return (
    <div className="form-container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Role (e.g., Developer)" value={role} onChange={(e) => setRole(e.target.value)} required />
        <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} required />
        <input type="number" placeholder="Years of Experience" value={year} onChange={(e) => setYear(e.target.value)} required />
        <textarea placeholder="Short Bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
        <button type="submit">Generate Portfolio</button>
      </form>
    </div>
  );
};

export default PortfolioForm;
