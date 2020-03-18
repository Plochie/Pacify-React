import * as d3Drag from 'd3-drag';
import * as d3Selection from 'd3-selection';
import * as d3 from 'd3';


const dragStart = (d: any) => {
	console.log('drag start', d)
};

const dragging = function (this: any, d: any) {

	d3Selection.select(this)
		.attr("x", d.x = d3.event.x)
		.attr("y", d.y = d3.event.y);
};

const dragEnd = (d: any) => {
	console.log('drag end', d)
};

const dragHandler = d3Drag.drag()
	.on('drag', dragging)
	.on('start', dragStart)
	.on('end', dragEnd);

export default dragHandler;
