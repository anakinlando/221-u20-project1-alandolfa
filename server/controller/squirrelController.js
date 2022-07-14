const mySquirrel = require('../model/mySquirrel');

let squirrels = [];

var squirrelOne = mySquirrel.createNewSquirrel(
	"God",
	"https://tse3.mm.bing.net/th?id=OIP.RWnLjQIX9aKv_kb9f_eWFgHaEK&pid=Api",
	"Purple",
	5,
	"Bob"
);

squirrels.push(squirrelOne);

var squirrelTwo = mySquirrel.createNewSquirrel(
	"Regular",
	"https://tse3.mm.bing.net/th?id=OIP._0rw2Rni-S3XdVfkG0k5rAHaD4&pid=Api",
	"Red",
	25,
	"Tim"
)

squirrels.push(squirrelTwo);

exports.getSquirrels = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(squirrels);
}

exports.saveSquirrel = function(req, res) {
	let newSquirrel = feedItem.createNewSquirrel(req.body.species, req.body.imageUrl, req.body.color, req.body.age, req.body.name);
	squirrels.push(newSquirrel);
	res.setHeader('Content-Type', 'application/json');
	res.send(squirrels);
}

exports.getSquirrel = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(squirrels[req.params.squirrelId]);
}

exports.deleteSquirrel = function(req, res) {
	squirrels.splice(req.params.squirrelId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(squirrels);
}

exports.updateSquirrel = function(req, res) {
	// get the existing user from the array
	var updatedSquirrel = squirrels[req.params.squirrelId];

	// check to see what has been passed and update the local copy
	console.log(req.body.species);
	if(req.body.title)
		updatedSquirrel.species = req.body.species;
	if (reqq.body.imageUrl)
		updatedSquirrel.imageUrl = req.body.imageUrl;
	if(req.body.color)
		updatedSquirrel.color = req.body.color;
	if(req.body.age)
		updatedSquirrel.age = req.body.age;
	if(req.body.name)
		updatedSquirrel.name = req.body.name;

	// save the local copy of the user back into the array
	squirrels[req.params.squirrelId] = updatedSquirrel;

	res.setHeader('Content-Type', 'application/json');
	res.send(squirrels[req.params.squirrelId]);
}

exports.updateEntireFeedItem = function(req, res) {
	squirrels[req.params.squirrelId] = req.body;
	res.setHeader('Content-Type', 'application/json');
	res.send(squirrels[req.params.squirrelId]);
}