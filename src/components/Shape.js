import React, { Component } from 'react';
import { ItemTypes } from '../constants/Constants';
import { DragSource } from 'react-dnd';

const shapeSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Shape extends Component {

  render() {
    const { id } = this.props;
    const { isDragging, connectDragSource, name } = this.props;
    return connectDragSource(
    	     <div style={{
              opacity: isDragging ? 0.5 : 1,
              fontSize: 25,
              fontWeight: 'bold',
              cursor: 'move'
            }}>
              {name==="Rect" ? 
                <img id="Shape" src={`img/${name}.png`} width="130" height="100" />
                :
                <img id="Shape" src={`img/${name}.png`} width="100" height="100" />
              }
          </div>
    	);
  }

}

export default DragSource(ItemTypes.SHAPE, shapeSource, collect)(Shape);