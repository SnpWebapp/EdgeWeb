/*************************************************************
 * FILE_NAME:	search_network.js
 * DESCRIPTION:	Creates the graph from the search results.
 *				The id of the object that stores the graph is
 *				called "search_network". The data of the results
 * 				are stored in "searchResults" as a json object.
 * DEPENDS ON:	vis.js
 * CALLED FROM:	index.jade
 *************************************************************/

var search_network = $('#search_network');
var node_card = document.getElementById('node_card');

// Resize the height of the container
search_network.css('height', 0.6*search_network.width());
$(window).resize(function() {search_network.css('height', 0.6*search_network.width());});

// Create a network
var nodes = new vis.DataSet(searchResults.nodes);
var edges = new vis.DataSet(searchResults.edges);

// Provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// Initialize the network
var network = new vis.Network(search_network[0], data, options);

// Initialize the card
node_card.style.display = 'none';

network.on('deselectNode', function(){node_card.style.display = 'none';})

network.on('selectNode', function(){

	// Make card visible
	node_card.style.display = 'block';

	// Get selected node and update card
	var selected_node = searchResults.nodes.filter(function(obj){
		return obj.id == network.getSelectedNodes()[0];
	});
	var card_title = document.getElementById('card_title');
	card_title.innerHTML = selected_node[0].label;
})

