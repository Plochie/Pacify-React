import * as d3Selection from 'd3-selection';
import { ModuleProperties } from 'src/entities';
import { SvgElement, SvgRectElement } from 'src/svg/types';
import { CLASS } from '../../constants/CLASS';
import GroupDragHandler from '../GroupDragHandler';

const INPUT = {
	WIDTH: 15,
	HEIGHT: 15
}

const mouseDown = function (parent: SvgElement) {
	d3Selection.event.stopPropagation();
	parent.on('mousedown.drag', null);
	const d = parent.datum();
	if (d) {
		d.drag = true;
	}
};

const mouseleave = function (parent: SvgElement) {
	d3Selection.event.stopPropagation();
	const d = parent.datum();
	if (d?.drag) {
		parent.call(GroupDragHandler as any);
		d.drag = false;
	}
}

const addInput = function (parent: SvgElement, props: ModuleProperties): SvgRectElement {

	const x = (INPUT.WIDTH / 2) - INPUT.HEIGHT
	const y = (props.height / 2) - (INPUT.HEIGHT / 2);

	// add input
	const input = parent.append('rect')
		.attr('class', CLASS.ACTION.INPUT)
		.attr('fill', 'red')
		.attr('width', INPUT.WIDTH)
		.attr('height', INPUT.HEIGHT)
		.attr('x', x)
		.attr('y', y);

	input.on('mousedown', () => mouseDown(parent));
	input.on('mouseleave',  () => mouseleave(parent));

	return input;
}

export default addInput;
