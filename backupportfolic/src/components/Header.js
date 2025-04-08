import React, { Component } from 'react';
import '../styles.css';

class Header extends Component {
  render() {
    return (
      <header className="container">
        <h1>My Portfolio</h1>
        <p>Enter your details to generate your personalized portfolio.</p>
      </header>
    );
  }
}

export default Header;
