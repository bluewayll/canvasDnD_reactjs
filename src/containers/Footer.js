import React, { Component } from 'react';

export default class Footer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <footer className="main-footer text-center">
        <strong>Copyright &copy; 2016 <a href="http://azaroudev.com" target="_blank">Hamza Azarou</a>.</strong> All rights reserved.
      </footer>
    );
  }

}

