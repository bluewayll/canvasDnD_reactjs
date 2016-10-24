import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants/Constants';

var stage = null;

const canvasTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    if(item.name === "Circle")
      createCircle();
    if(item.name === "Rect")
      createRect();
    if(item.name === "Line")
      createLine();
    if(item.name === "Square")
      createSquare();
    return;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function createCircle() {

          var layer = new Konva.Layer();

          var circle = new Konva.Circle({
            x: stage.getWidth() / 6,
            y: stage.getHeight() / 6,
            radius: 40,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 4,
            draggable :true
          });

          circle.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
          });
          circle.on('mouseout', function() {
            document.body.style.cursor = 'default';
          });
          circle.on('dblclick dbltap', function() {
              this.destroy();
              layer.draw();
              Save();
          });
          circle.on('dragend', function() {
            Save();
          });


          layer.add(circle);

          stage.add(layer);
          Save();
        }

function createLine(xLine,yLine){

          var layer = new Konva.Layer();

          var Line = new Konva.Line({
            x: stage.getWidth() / 6,
            y: stage.getHeight() / 6,
            points: [0, 10, 20, 30, 40, 50, 60, 70],
            stroke: 'black',
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true
          });

          Line.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
          });
          Line.on('mouseout', function() {
            document.body.style.cursor = 'default';
          });
          Line.on("dblclick dbltap", function() {
              this.destroy();
              layer.draw();
              Save();
          });
          Line.on('dragend', function() {
            Save();
          });

          layer.add(Line);

          stage.add(layer);

          Save();
          }

          function createRect(){

          var layer = new Konva.Layer();

          var rect = new Konva.Rect({
                      x: stage.getWidth() / 6,
            y: stage.getHeight() / 6,
            width: 140,
            height: 70,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 4,
            draggable : true
          });
          rect.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
          });
          rect.on('mouseout', function() {
            document.body.style.cursor = 'default';
          });
          rect.on("dblclick dbltap", function() {
              this.destroy();
              layer.draw();
              Save();
          });
          rect.on('dragend', function() {
            Save();
          });

          layer.add(rect);
          stage.add(layer);
          Save();
          }

          function createSquare(){

          var layer = new Konva.Layer();

          var rect = new Konva.Rect({
                                          x: stage.getWidth() / 6,
            y: stage.getHeight() / 6,
            width: 70,
            height: 70,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 4,
            draggable : true
          });
          rect.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
          });
          rect.on('mouseout', function() {
            document.body.style.cursor = 'default';
          });
          rect.on("dblclick dbltap", function() {
              this.destroy();
              layer.draw();
              Save();
          });
          rect.on('dragend', function() {
            Save();
          });

          layer.add(rect);
          stage.add(layer);
          Save();
          }

function Save(){
    var json = stage.toJSON();
    localStorage.setItem('canvas',json);
  }

class Canvas extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if(localStorage.getItem('canvas')) {
      var json = localStorage.getItem('canvas');
      stage = Konva.Node.create(json, 'Canvas');
      var that = this;
      var rects = stage.find('Rect');
          rects.each(function(shape) {
            shape.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
            });
            shape.on('mouseout', function() {
              document.body.style.cursor = 'default';
            });
            shape.on("dblclick dbltap", function() {
                this.destroy();
                stage.draw();
                that.Save();
            });
            shape.on('dragend', function() {
            that.Save();
            });
          });

          var circles = stage.find('Circle');
          circles.each(function(shape) {
            shape.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
            });
            shape.on('mouseout', function() {
              document.body.style.cursor = 'default';
            });
            shape.on('click', function() {
                this.destroy();
                stage.draw();
                that.Save2();
            });
            shape.on('dragend', function() {
            that.Save();
            });
          });

          var lines = stage.find('Line');
          lines.each(function(shape) {
            shape.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
            });
            shape.on('mouseout', function() {
              document.body.style.cursor = 'default';
            });
            shape.on("dblclick dbltap", function() {
                this.destroy();
                stage.draw();
                that.Save();
            });
            shape.on('dragend', function() {
            that.Save();
            });
          });
    }
    else {
      var json = '{"attrs":{"width":1366,"height":407},"className":"Stage","children":[]}';
      stage = Konva.Node.create(json, 'Canvas');
    }
  }

  Save(){
    var json = stage.toJSON();
    localStorage.setItem('canvas',json);
  }


	render() {
			const { canDrop, isOver, connectDropTarget } = this.props;
      const isActive = canDrop && isOver;

      let backgroundColor = 'grey';
      if (isActive) {
        backgroundColor = 'darkgreen';
      } else if (canDrop) {
        backgroundColor = 'darkgreen';
      }

	    return connectDropTarget(
	    	<div style={{position:'absolute', height: '407px', backgroundColor: backgroundColor}} id="Canvas" />
	   	);
	}

}

export default DropTarget(ItemTypes.SHAPE, canvasTarget, collect)(Canvas);