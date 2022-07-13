const feedItem = require('../model/feedItem');

let currentStories = [];

var feedOne = feedItem.createFeedItem(
	"Squirrel Stabs Chipmunk", 
	"Phat Gus the Squirrel has acquired a fallen sharp stick from a birch tree. Using this stick, he instigated a fight with Alvin the Chipmunk. From there on, they proceeded to engage in a legendary duel with Phat Gus's Stick vs Alvin's Charisma. In the end, the practical weaponry of Phat Gus the Squirrel outmatched the charm of Alvin the Chipmunk.", 
	"https://markrober.store/products/phat-gus-plush-toy", 
	"../images/phatgus.png"
);

currentStories.push(feedOne);

var feedTwo = feedItem.createFeedItem(
	"Super Fast Squirrel Runs For Eternity",
    "Jimmy the Squirrel was caught in an infinitely looping hamster wheel, running forever. The hamster wheel allegedly fuels on the raw, unfiltered fear that the squirrel exherts, knowing that he might never return to his family. Ironically, the squirrel can go free easily if he stops being afraid, but nobody will ever tell him that.",
    "https://www.youtube.com/watch?v=1tKTZT0sHS4", 
    "../images/jimmythesquirrel.jpg"
);

currentStories.push(feedTwo);

var feedThree = feedItem.createFeedItem(
	"Are Squirrels The Next Earth Overlords?", 
    "Simon the Squirrel solving a 4D rubix cube leads researchers to question their genius. Simon the Squirrel was never an ordinary squirrel. From the womb, his parents dropped him off of a tree. Afterwards, Billy the Stranger adopted Simon the Squirrel and took him in for an IQ test. Simon the Squirrel demonstrated more proficiency than most college students, leading everyone to wonder just how powerful a squirrel's mind can be.", 
    "https://ourfunkypets.com/how-intelligent-are-squirrels/", 
    "../images/smartsquirrel.jpg"
);

currentStories.push(feedThree);

exports.getFeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}

exports.saveFeedItem = function(req, res) {
	let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	currentStories.push(newFeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}

exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.story]);
}

exports.deleteFeedItem = function(req, res) {
	currentStories.splice(req.params.story, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}

exports.updateFeedItem = function(req, res) {
	// get the existing user from the array
	var updatedFeedItem = currentStories[req.params.story];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
		updatedFeedItem.title = req.body.title;
	if(req.body.body)
		updatedFeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedFeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	currentStories[req.params.story] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.story]);
}