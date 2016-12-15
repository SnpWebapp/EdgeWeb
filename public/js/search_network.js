// Creates the graph from the search results.
// The id of the object that stores the graph is called "search_network"
// The data of the results are stored in "searchResults" as a json object

// Create a network
var netcontainer = document.getElementById('search_network');
var nodes = new vis.DataSet(searchResults.nodes);
var edges = new vis.DataSet(searchResults.edges);

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// initialize the network
var network = new vis.Network(netcontainer, data, options);

