// Opens a new Squirrel Wikipedia tab if user presses portal button

document.getElementById('portal_button').addEventListener('click', function () {
    openTab('https://en.wikipedia.org/wiki/Squirrel');
  });

// Changes the HTML of the page to display the content of the passed feedItem

function displayItem(feedItem, feedItemId) {
    document.getElementById('newsfeed').innerHTML 
    += '<img src="' + feedItem.imageUrl + '" class="feedImage"/><br />'
    + '<b><a href="' + feedItem.linkUrl + '" target="_blank" rel="noopener noreferrer">' + feedItem.title + '</a></b><br />'
    + '<p>' + feedItem.body + '</p>'
    + '<button type="button" class="button" id="feedItem' + feedItemId + '">Remove</button><hr />';
}

// Changes the HTML of the page to display the daily squirrel

function displaySquirrel(dailySquirrel) {
    document.getElementById('dailySquirrel').innerHTML
    += '<img src="' + dailySquirrel.imageUrl + '" class="feedImage"/><br/>'
    + '<h2>Species: ' + dailySquirrel.species + '</h2>'
    + '<h3>Name: ' + dailySquirrel.name +'</h3>'
    + '<h4>Color: ' + dailySquirrel.color + '</h4>'
    + '<h5>Age: ' + dailySquirrel.age + '</h5>';
}

// Changes the HTML of the page to display a form to allow a user to submit their own story

function displayForm() {
    document.getElementById('addCustomStory').innerHTML = '<h1 class="feed_title">Add Your Squirrel Story!</h1>'
    document.getElementById('addCustomStory').innerHTML
    += '<form id="addStoryForm" name="addStoryForm">'
    + '<label for="customTitle">Title:</label><br>'
    + '<input type="text" id="customTitle" name="customTitle" size="55" required="required"><br>'
    + '<label for="customBody">Body:</label><br>'
    + '<input type="text" id="customBody" name="customBody" size="55" required="required"><br>'
    + '<label for="customLinkUrl">Link:</label><br>'
    + '<input type="text" id="customLinkUrl" name="customLinkUrl" size="55" requied="required" placeholder="https://"><br>'
    + '<label for="customImageUrl">Image:</label><br>'
    + '<input type="text" id="customImageUrl" name="customImageUrl" size="55" required="required"><br>'
    + '<input type="submit" class="button" value="Submit Story"></form>'

    // Adds an event listener to activate when the story form is submitted

    document.getElementById('addStoryForm').addEventListener('submit', () => {
        // Uses fetch API to post the custom story to the currentStories json API
        fetch("api/currentStories", {
            method: "POST",
            body: JSON.stringify({
                title: document.getElementById('addStoryForm').elements[0].value,
                body: document.getElementById('addStoryForm').elements[1].value,
                linkUrl: document.getElementById('addStoryForm').elements[2].value,
                imageUrl: document.getElementById('addStoryForm').elements[3].value
            }),
            headers: {
                'Content-type':'application/json; charset=UTF-8'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))
        getCurrentFeed();
    })
}

// Uses asynchronous fetch requests to get the daily squirrel, feed items, and custom story form

function getCurrentFeed() {
    document.getElementById('newsfeed').innerHTML = "<h1 class='feed_title'>Spectacular Squirrel Stories!</h1>";
    document.getElementById('dailySquirrel').innerHTML = '<h1 class="feed_title">Squirrel of the Day</h1>';
    // Uses fetch API to get the daily news feed for the website
    fetch(
        '/api/currentStories'
    ).then((res) => {
        res.json().then(
            (myData) => {
                // Loops through each object in the currentStories API to display them on the page
                for (data in myData) {
                    displayItem(myData[data], data);
                }
                // Uses click event listeners to delete a story from the feed and refresh it by clicking the remove button
                if (document.getElementById('feedItem0')) {
                    document.getElementById('feedItem0').addEventListener('click', () => {
                        deleteFeedItem(0);
                        getCurrentFeed();
                    })
                }
                if (document.getElementById('feedItem1')) {
                    document.getElementById('feedItem1').addEventListener('click', () => {
                        deleteFeedItem(1);
                        getCurrentFeed();
                    })
                }
                if (document.getElementById('feedItem2')) {
                    document.getElementById('feedItem2').addEventListener('click', () => {
                        deleteFeedItem(2);
                        getCurrentFeed();
                    })
                }
                if (document.getElementById('feedItem3')) {
                    document.getElementById('feedItem3').addEventListener('click', () => {
                        deleteFeedItem(3);
                        getCurrentFeed();
                    })
                }
                /* for (data in myData) {
                    if (document.getElementById('feedItem' + data)) {
                        document.getElementById('feedItem' + data).addEventListener('click', () => {
                        alert('story = ' + data)
                        deleteFeedItem(data);
                        getCurrentFeed();
                    }
                }) 
                */              
            })
        }),
    () => {
        console.log('failure of retrieving stories!');
    }
    // Uses fetch API to get the daily squirrel from squirrels JSON API
    fetch(
        '/api/squirrels'
    ).then((res) => {
        res.json().then(
            (myData) => {
                // Displays a random squirrel from squirrels JSON API to be the squirrel of the day
                displaySquirrel(myData[Math.round(Math.random())]);
            }
        )
    },
    () => {
        console.log('failure of retrieving squirrels!');
    })
    // Displays the custom story form to add a custom story
    displayForm();
}
 
// Uses fetch API to delete a certain story from the currentStories JSON API

function deleteFeedItem(story) {
    fetch(
        '/api/currentStories/' + story,
        {
            method: 'DELETE',
            headers: {
                'Content-type':'application/json; charset=UTF-8'
            },
        }
    )
    .then(res => res.json())
    .then(data => console.log(data))
}

// W3C event listener that passes currentStories through displayItem on page load

window.addEventListener('load', () => {
    getCurrentFeed();
});

// Checks if the user clicks the "Squirrel News" title text and sends them back to home page if so

document.getElementById('home_page').addEventListener('click', function () {
    goToLocation('/');
});