import * as d3Selection from 'd3-selection';

// shorten d3 selection interface for svg container
export interface SvgSvgElement extends d3Selection.Selection<SVGSVGElement, unknown, null, undefined> { }
export interface SvgRectElement extends d3Selection.Selection<SVGRectElement, unknown, null, undefined> { }
