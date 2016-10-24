import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-static-top">
          <h1 className="text-center" style={{color:"white"}}>Sanadtech</h1>
        </nav>
      </header>
    );
  }

}

