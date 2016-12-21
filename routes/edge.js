/**********************************************************F********
 * FILE NAME:	edge.js
 * DESCRIPTION:	Defines functions that perform the back-end server
 *				computations.
 *******************************************************************/

/*******************************************************************
 * FUNCTION:	edgeSearch
 * DESCRIPTION: Callback function on POST request of index page.
 * 				Creates graph for search results.
 * INPUTS:		data - Json object of search request.
 * RETURNS:		Json object with a "nodes" and "edges" field that
 *				describe the graph network of the search results.
 *				nodes:	id      - key of the citation
 *						label   - text of the node
 *						title   - article title
 *						authors - article author's
 *						journal - name of journal
 *				edges:	from - id of start node
 *						to   - id of end node
 *******************************************************************/

exports.edgeSearch = function (data) {

	console.log(data)

	var net = {"nodes":[], "edges":[]}

	//----------------------
	// Example graph network

	// Define nodes
	for (i = 0; i != 5; ++i) {
		net["nodes"].push({"id": i, "label": data.search_query})
	}

	// Define edges
	var edgestart = [0,0,1,1]
	var edgeend = [2,1,3,4]
	for (i = 0; i != 4; ++i) {
		net["edges"].push({"from": edgestart[i], "to": edgeend[i]})
	}

	return net
}

/*******************************************************************
 * FUNCTION:	edgeGetArticle
 * DESCRIPTION: Queries the database for the article for the given
 *				id key. All entire article should be returned to
 *				be rendered on the webpage.
 * INPUTS:		id - id of the article.
 * RETURNS:		Json object with full article information
 *******************************************************************/

exports.edgeGetArticle = function (id) {
	console.log(id)
	var article = {
		'id':       id,
		'title':    'Test Article 1',
		'authors':  ['A. B. Cider', 'D. Elder'],
		'abstract': 'This is an example of what an article abstract would be like',
	}
	return article
}
