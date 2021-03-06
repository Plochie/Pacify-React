import { ModuleProperties } from 'src/entities';
import { SvgElement, SvgRectElement } from 'src/svg/types';
import { CLASS } from 'src/constants/CLASS';
import PathDragHandler from 'src/svg/PathDragHandler';

const OUTPUT = {
	WIDTH: 15,
	HEIGHT: 15
}

const addOutput = function (parent: SvgElement, props: ModuleProperties): SvgRectElement {

	const x = props.width - (OUTPUT.WIDTH / 2)
	const y = (props.height / 2) - (OUTPUT.HEIGHT / 2);

	// add output
	const output = parent.append('rect')
		.attr('class', CLASS.ACTION.OUTPUT,)
		.attr('fill', 'green',)
		.attr('width', OUTPUT.WIDTH,)
		.attr('height', OUTPUT.HEIGHT,)
		.attr('x', x,)
		.attr('y', y);

	output.call(PathDragHandler as any);

	return output;
}

export default addOutput;
