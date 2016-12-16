// FUNCTION:	edgesearch
// DESCRIPTION: Create graph for search results.
// INPUTS:		data - Json object of search request.
// RETURNS:		Json object with a "nodes" and "edges" field that
//				describe the graph network of the search results.

exports.edgesearch = function (data) {

	console.log(data);

	var net = {"nodes":[], "edges":[]};

	//----------------------
	// Example graph network

	// Define nodes
	for (i = 0; i != 5; ++i) {
		net["nodes"].push({"id": i, "label": data.search_query});
	}

	// Define edges
	var edgestart = [0,0,1,1];
	var edgeend = [2,1,3,4];
	for (i = 0; i != 4; ++i) {
		net["edges"].push({"from": edgestart[i], "to": edgeend[i]});
	}

	return net;
}
