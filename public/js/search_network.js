/*************************************************************
 * FILE_NAME:	search_network.js
 * DESCRIPTION:	Creates the graph from the search results.
 *				The id of the object that stores the graph is
 *				called "search_network". The data of the results
 * 				are stored in "searchResults" as a json object.
 * DEPENDS ON:	vis.js
 * CALLED FROM:	index.jade
 *************************************************************/

var netcontainer = $('#search_network');

// Resize the height of the container
netcontainer.css('height', 0.6*netcontainer.width());

// Create a network
var nodes = new vis.DataSet(searchResults.nodes);
var edges = new vis.DataSet(searchResults.edges);

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// initialize the network
var network = new vis.Network(netcontainer[0], data, options);
