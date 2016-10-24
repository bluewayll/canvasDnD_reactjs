import React, { Component } from 'react';
import Shape from "../components/Shape";
import Canvas from "../components/Canvas";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Home extends Component {

	constructor(props, context) {
    	super(props, context);
  	}

  	render() {
	    return (
	      	<div className="container">
				<div className="row">
					<div className="col-md-2">
						<div className="col-md-12">
							<Shape name="Circle" />
						</div>
						<div className="col-md-12">
							<Shape name="Rect" />
						</div>
						<div className="col-md-12">
							<Shape name="Line" />
						</div>
						<div className="col-md-12">
							<Shape name="Square" />
						</div>
					</div>
					<div className="col-md-10" >
						<Canvas />
					</div>
				</div>
			</div>
	    );
	  }

}

export default DragDropContext(HTML5Backend)(Home);