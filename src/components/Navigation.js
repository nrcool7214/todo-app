import React from 'react';
import logo from '../images/logo.png';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="right">
          <a href="#">Help</a>
        </div>
      </nav>
    );
  }
}

export default Navigation;
