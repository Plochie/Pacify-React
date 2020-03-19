import * as d3Selection from 'd3-selection';

// shorten d3 selection interface for svg container
export interface SvgElement extends d3Selection.Selection<SVGElement, unknown, null, undefined> { }
export interface SvgGElement extends d3Selection.Selection<SVGGElement, unknown, null, undefined> { }
export interface SvgSvgElement extends d3Selection.Selection<SVGSVGElement, unknown, null, undefined> { }
export interface SvgRectElement extends d3Selection.Selection<SVGRectElement, unknown, null, undefined> { }
