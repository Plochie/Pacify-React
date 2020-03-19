import { SvgElement } from './types';
import * as d3Drag from 'd3-drag';
import * as d3Selection from 'd3-selection';
import * as d3 from 'd3';


const dragStart = function (this: Element, d: any) {
	console.log('drag start', d);
	const children = this.children as any;

	const bigRect = d3Selection.select(children['0']);
	const smallRect = d3Selection.select(children['1']);
};

const dragEnd = function (this: Element, d: any) {

	const children = this.children as any;

	const bigRect = d3Selection.select(children['0']);
	const smallRect = d3Selection.select(children['1']);

	console.log('end', bigRect.attr('x'), bigRect.attr('y'))
};

const dragging = function (this: Element, d: any) {
	const svgElement = this;
	svgElement.nodeName === 'g' ? groupDragging(svgElement as SVGGElement, d) : anyDragging(svgElement as any, d);
};

const groupDragging = function (svgGroup: SVGGElement, d: any) {

	const children = svgGroup.children as any;
	const noOfChildren = children.length;

	// d3.select(svgGrroup).selectAll("rect")
	// 	.attr("x", d.x = d3.event.x)
	// 	.attr("y", d.y = d3.event.y);

	// console.log(d3.event.x, d3.event.y)

	// for (let i = 0; i < noOfChildren; i++) {
	// 	const svgElement = children['' + i];
	// 	const d3Element = d3Selection.select(svgElement);
	// 	console.log(d3Element.datum())
	// 	anyDragging(d3Element, d3Element.datum());
	// 	// console.log(d3Selection.select(svgElement).datum())
	// }

	const bigRect = d3Selection.select(children['0']) as  any;
	const smallRect = d3Selection.select(children['1']) as any;

	console.log(bigRect.datum(), smallRect.datum());

	bigRect.attr("x", bigRect.datum().x = d3.event.x)
		.attr("y", bigRect.datum().y = d3.event.y);

		smallRect.attr("x", bigRect.datum().x = d3.event.x)
		.attr("y", bigRect.datum().y = d3.event.y);

}

const anyDragging = function (svgElement: SvgElement, d?: any) {

	svgElement.attr("x", d.x = d3.event.x)
		.attr("y", d.y = d3.event.y);
	// else {
	// 	d3Element.attr("x", d.x = d3.event.x)
	// 		.attr("y", d.y = d3.event.y);
	// }
}

const dragHandler = d3Drag.drag()
	.on('drag', dragging)
	.on('start', dragStart)
	.on('end', dragEnd);

export default dragHandler;
