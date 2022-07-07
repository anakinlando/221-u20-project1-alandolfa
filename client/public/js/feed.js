// Opens a new Squirrel Wikipedia tab if user presses portal button

document.getElementById('portal_button').addEventListener('click', function () {
    openTab('https://en.wikipedia.org/wiki/Squirrel');
  });

// Function for creating a feedItem object

function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
};

// Initialize the first story object

let feedOne = new feedItem(
    "Squirrel Stabs Chipmunk", 
    "Phat Gus the Squirrel has acquired a fallen sharp stick from a birch tree. Using this stick, he instigated a fight with Alvin the Chipmunk. From there on, they proceeded to engage in a legendary duel with Phat Gus's Stick vs Alvin's Charisma. In the end, the practical weaponry of Phat Gus the Squirrel outmatched the charm of Alvin the Chipmunk.", 
    "https://markrober.store/products/phat-gus-plush-toy", 
    "../images/phatgus.png"
    );

// Initialize the second story object

let feedTwo = new feedItem(
    "Super Fast Squirrel Runs For Eternity",
    "Jimmy the Squirrel was caught in an infinitely looping hamster wheel, running forever. The hamster wheel allegedly fuels on the raw, unfiltered fear that the squirrel exherts, knowing that he might never return to his family. Ironically, the squirrel can go free easily if he stops being afraid, but nobody will ever tell him that.",
    "https://www.youtube.com/watch?v=1tKTZT0sHS4", 
    "../images/jimmythesquirrel.jpg"
    );
    
// Initialize the third story object

let feedThree = new feedItem(
    "Are Squirrels The Next Earth Overlords?", 
    "Simon the Squirrel solving a 4D rubix cube leads researchers to question their genius. Simon the Squirrel was never an ordinary squirrel. From the womb, his parents dropped him off of a tree. Afterwards, Billy the Stranger adopted Simon the Squirrel and took him in for an IQ test. Simon the Squirrel demonstrated more proficiency than most college students, leading everyone to wonder just how powerful a squirrel's mind can be.", 
    "https://ourfunkypets.com/how-intelligent-are-squirrels/", 
    "../images/smartsquirrel.jpg"
    );

// Array for holding the story feed objects

let currentStories = [feedOne, feedTwo, feedThree];

// Changes the HTML of the page to display the content of the passed feedItem

function displayItem(feedItem) {
    document.getElementById('newsfeed').innerHTML +=
    '<img src="' + feedItem.imageUrl + '" class="feedImage"/><br />'
    + '<b><a href="' + feedItem.linkUrl + '">' + feedItem.title + '</a></b><br />'
    + '<p>' + feedItem.body + '</p><hr />';
}

// W3C event listener that passes currentStories through displayItem on page load

window.addEventListener('load', function() {
    currentStories.map(displayItem);
});

// Checks if the user clicks the "Squirrel News" title text and sends them back to home page if so

document.getElementById('home_page').addEventListener('click', function () {
    goToLocation('/');
});