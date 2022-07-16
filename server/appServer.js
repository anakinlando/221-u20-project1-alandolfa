const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('client/public'));

app.use(bodyParser.json({type: 'application/json'}));

// Loads index.html at localhost:1337/

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

// Loads feed.js at localhost:1337/feed

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

var currentStories = require('./controller/feedController');

// Routes the HTTP methods for currentStories API

app.route('/api/currentStories')
	.get((req, res) => {
		currentStories.getFeedItems(req, res)
	})
	.post((req, res) => {
		currentStories.saveFeedItem(req, res)
	})

// Routes the HTTP methods for the individual stories

app.route('/api/currentStories/:story')
	.get((req, res) => {
		currentStories.getFeedItem(req, res)
	})
	.delete((req, res) => {
		currentStories.deleteFeedItem(req, res)
	})
	.patch((req, res) => {
		currentStories.updateFeedItem(req, res)
	})
	.put((req, res) => {
		currentStories.updateFeedItem(req, res)
	})

var squirrels = require('./controller/squirrelController')

// Routes the HTTP methods for the squirrels

app.route('/api/squirrels')
	.get((req, res) => {
		squirrels.getSquirrels(req, res)
	})
	.post((req, res) => {
		squirrels.saveSquirrel(req, res)
	})

// Routes the HTTP methods for the individual squirrels

app.route('/api/squirrels/:squirrelId')
	.get((req, res) => {
		squirrels.getSquirrel(req, res)
	})
	.delete((req, res) => {
		squirrels.deleteSquirrel(req, res)
	})
	.patch((req, res) => {
		squirrels.updateSquirrel(req, res)
	})
	.put((req, res) => {
		squirrels.updateSquirrel(req, res)
	})

// Species the 1337 port for the socket

app.listen(1337, () => console.log('Listening on port 1337.'))

