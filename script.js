// set the dimensions and margins of the graph
var margin = {
	top: 10,
	right: 30,
	bottom: 30,
	left: 60
}

var width = 460 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;


// append the svg object to the body of the page
var svg = d3.select('#data_chart')
	.append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.append('g')
	.attr('transform','translate(' + margin.left + ',' + margin.top + ')');
