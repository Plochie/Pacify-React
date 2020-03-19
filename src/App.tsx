import * as d3Selection from 'd3-selection';
import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import dragHandler from './svg/dragging';
import { SvgRectElement, SvgSvgElement, SvgGElement, SvgElement } from './svg/types';


const svgRect = (parent: SvgElement, attrs: { [key: string]: string; }): SvgRectElement => {

	const rect: SvgRectElement = parent.append('rect')
		.data([{ x: Number(attrs['x']), y: Number(attrs['y']) }])
		.attr('x', function (data:any) { return (data.x); })
		.attr('y', function (data:any) { return (data.y); }) as any;

	delete attrs['x'];
	delete attrs['y'];

	Object.getOwnPropertyNames(attrs).forEach((attr) => {
		rect.attr(attr, attrs[attr]);
	});

	return rect;
};


const svgGroup = (parent: SvgElement): SvgGElement => {

	/* <rect rx="15" height="60" width="140" y="135" x="160.5" stroke-width="2" stroke="#000" fill="#fff"/>
<rect stroke="#000" rx="6" height="16.80001" width="16.00003" y="156.8" x="293.19997" stroke-width="2" fill="#fff"/>
<rect stroke="#000" rx="6" height="16.80001" width="16.00003" y="156.4" x="152" stroke-width="2" fill="#fff"/> */

	const g = parent.append('g')
		// .data([{ x: 0, y: 0 }]);

	svgRect(g as any, { 'x': '10', 'y': '20', 'rx': '5', 'height': '35', 'width': '35', 'stroke-width': '1', 'stroke': '#000', 'fill': '#fff' });
	svgRect(g as any, { 'x': '30', 'y': '50', 'rx': '5', 'height': '25', 'width': '25', 'stroke-width': '1', 'stroke': '#000', 'fill': '#fff' });
	// svgRect(g as any, { 'x': '50', 'y': '80', 'rx': '5', 'height': '15', 'width': '15', 'stroke-width': '1', 'stroke': '#000', 'fill': '#fff' });

	g.call(dragHandler as any)

	return g as any;
}


function SvgArea() {

	const svgRef = useRef<SVGSVGElement>(null);
	const [svgState, setSvgState] = useState<SvgSvgElement>();

	useEffect(() => {

		console.log('SvgArea: rendering');
		// get svg area and set it in state
		const d3Svg = d3Selection.select(svgRef.current) as any;
		setSvgState(d3Svg);

		return () => {
			console.log('SvgArea: done rendering');
		};
	}, [svgRef]);

	const testGroupHandler = () => {
		svgGroup(svgState as any);
	};

	const disableDrag = () => {
		svgState?.selectAll('.svgRect').on('mousedown.drag', null);
	};

	const enableDrag = () => {
		svgState?.selectAll('.svgRect').call(dragHandler as any);
	};

	return (
		<div className='svg-area-wrapper'>
			<svg ref={svgRef} id='svgArea'></svg>
			<br />
			<button onClick={testGroupHandler}>test group</button>
			<button onClick={disableDrag}>disable drag</button>
			<button onClick={enableDrag}>enable drag</button>
		</div>
	);

}

function App() {

	return (
		<div className="App">
			<SvgArea />
		</div>
	);
}

export default App;
