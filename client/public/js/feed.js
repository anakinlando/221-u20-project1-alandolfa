document.getElementById('portal_button').addEventListener('click', function () {
    openTab('https://en.wikipedia.org/wiki/Squirrel');
  });

function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
};

let feedOne = new feedItem(
    "Squirrel Stabs Chipmunk", 
    "Phat Gus the Squirrel has acquired a fallen sharp stick from a birch tree. Using this stick, he instigated a fight with Alvin the Chipmunk. From there on, they proceeded to engage in a legendary duel with Phat Gus's Stick vs Alvin's Charisma. In the end, the practical weaponry of Phat Gus the Squirrel outmatched the charm of Alvin the Chipmunk.", 
    "https://markrober.store/products/phat-gus-plush-toy", 
    "../images/phatgus.png"
    );

let feedTwo = new feedItem(
    "Super Fast Squirrel Runs For Eternity",
    "Jimmy the squirrel was caught in an infinitely looping hamster wheel, running forever.",
    "https://www.youtube.com/watch?v=1tKTZT0sHS4", 
    "../images/jimmythesquirrel.jpg"
    );
    
let feedThree = new feedItem(
    "Are Squirrels The Next Earth Overlords?", 
    "Simon the Squirrel solving a 4D rubix cube leads researchers to question their genius.", 
    "https://ourfunkypets.com/how-intelligent-are-squirrels/", 
    "../images/smartsquirrel.jpg"
    );

let currentStories = [feedOne, feedTwo, feedThree];

function displayItem(feedItem) {
    document.getElementById('newsfeed').innerHTML +=
    '<img src="' + feedItem.imageUrl + '" class="feedImage"/><br />'
    + '<b><a href="' + feedItem.linkUrl + '">' + feedItem.title + '</a></b><br />'
    + '<p>' + feedItem.body + '</p><hr />';
}

window.addEventListener('load', function() {
    currentStories.map(displayItem);
});

document.getElementById('home_page').addEventListener('click', function () {
    goToLocation('/');
});