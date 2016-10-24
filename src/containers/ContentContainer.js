import React, { Component } from 'react';

export default class ContentContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">

          {this.props.children}
          
        </section>
      </div>
    );
  }

}