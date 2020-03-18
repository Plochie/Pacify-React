import * as d3Selection from 'd3-selection';
import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import dragHandler from './svg/dragging';
import { SvgRectElement, SvgSvgElement } from './svg/types';


const svgRect = (svgState: SvgSvgElement): SvgRectElement => {

	const rect: any = svgState.append('rect')
		.data([{
			x: 50,
			y: 50
		}])
		.attr('x', function (d) {
			return (d.x);
		})
		.attr('y', function (d) {
			return (d.y);
		})
		.attr('width', '120px')
		.attr('height', '40px')
		.attr('class', 'svgRect');

	// TODO: need to check for type safety
	dragHandler(rect as any);

	return rect;
};


function SvgArea() {

	const svgRef = useRef<SVGSVGElement>(null);
	const [svgState, setSvgState] = useState<SvgSvgElement>();
	const [svgRects, setSvgRects] = useState<SvgRectElement[]>([]);

	useEffect(() => {

		console.log('SvgArea: rendering');

		// get svg area and set it in state
		const d3Svg = d3Selection.select(svgRef.current) as any;
		setSvgState(d3Svg);

		return () => {
			console.log('SvgArea: done rendering');
		};
	}, [svgRef]);


	const testHandler = () => {

		if (svgState !== undefined) {
			const rect = svgRect(svgState);
			svgRects.push(rect)
			console.log(rect)
		}
	};

	const disableDrag = () => {
		for (const rect of svgRects) {
			rect.on('mousedown.drag', null);
		}
	};

	const enableDrag = () => {
		for (const rect of svgRects) {
			dragHandler(rect as any)
		}
	};

	return (
		<div className='svg-area-wrapper'>
			<svg ref={svgRef} id='svgArea'></svg>
			<button onClick={testHandler}>test</button>
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
