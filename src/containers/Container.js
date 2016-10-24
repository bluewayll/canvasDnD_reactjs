import React from 'react';

import Header from './Header';
import ContentContainer from './ContentContainer';
import Footer from './Footer';



export default class Container extends React.Component {

	componentDidMount() {
  }

  componentWillUnmount() {
  }

  constructor(props, context) {
    super(props, context);

  }

  render() {
  	return (
			<div className="content-wrapper">
      	<Header />
      	<ContentContainer children={this.props.children} />
        <Footer />
    	</div>
		);
  }

}

