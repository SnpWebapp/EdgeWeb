# EdgeWeb
Front-end web app

NPM Dependencies:

	After a git clone, the following node.js packages need to be installed:
	- npm install dotenv
	- npm install keystone
	- npm install lodash
	- npm install -g node-sass-middleware --save

Third-party Packages:

	Vis - Render the network graph
	Materialize-css - Package from Google for styling
	NoUiSlider - Custom range slider

Folders are organised as follows:

	/models
		Defines the data models used for validation (on the client side) and storage in the database (on the server side).
	/public
		Libraries, resources and scripts for front-end webpage. The css scripts are in "styles/site/*.scss" and custom javascript scripts are in "js/*.js"
	/routes
		Routes the URLs to javascript middleware and views.
	/templates
		Jade scripts to generate the htmls
