const express = require('express')
var bodyParser = require('body-parser');

const app = express();
app.use(express.static('client/public'));

app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

var currentStories = require('./controller/feedController');

app.route('/api/currentStories')
	.get((req, res) => {
		currentStories.getFeedItems(req, res)
	})
	.post((req, res) => {
		currentStories.saveFeedItem(req, res)
	})

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

app.listen(1337, () => console.log('Listening on port 1337.'))
