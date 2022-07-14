// Opens a new Squirrel Wikipedia tab if user presses portal button

document.getElementById('portal_button').addEventListener('click', function () {
    openTab('https://en.wikipedia.org/wiki/Squirrel');
  });

// Changes the HTML of the page to display the content of the passed feedItem

function displayItem(feedItem, feedItemId) {
    document.getElementById('newsfeed').innerHTML +=
    '<img src="' + feedItem.imageUrl + '" class="feedImage"/><br />'
    + '<b><a href="' + feedItem.linkUrl + '">' + feedItem.title + '</a></b><br />'
    + '<p>' + feedItem.body + '</p>'
    + '<button type="button" class="button" id="feedItem' + feedItemId + '">Remove</button><hr />';
    // console.log(document.getElementById('newsfeed').innerHTML);
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

// Uses asynchronous fetch requests to get the daily squirrel and feed items

function getCurrentFeed() {
    document.getElementById('newsfeed').innerHTML = "<h1 class='feed_title'>Spectacular Squirrel Stories!</h1>";
    document.getElementById('dailySquirrel').innerHTML = '<h1 class="feed_title">Squirrel of the Day</h1>';
    fetch(
        '/api/currentStories'
    ).then((res) => {
        res.json().then(
            (myData) => {
                for (data in myData) {
                    displayItem(myData[data], data);
                }
            }
        )
    },
    () => {
        console.log('failure of retrieving stories!');
    })
    fetch(
        '/api/squirrels'
    ).then((res) => {
        res.json().then(
            (myData) => {
                displaySquirrel(myData[0]);
            }
        )
    },
    () => {
        console.log('failure of retrieving squirrels!');
    })
}

// Asynchronous fetch to add a story from the user's custom inputted story

function addFeedItem(story) {
    fetch(
        '/api/currentStories/',
        {
            method: 'POST',
            body: JSON.stringify({
                title: story.title,
                body: story.body,
                imageUrl: story.imageUrl,
                linkUrl: story.linkUrl
            }),
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
    console.log(document.getElementById('newsfeed').innerHTML);
});

function storySubmit(e) {
    submittedStory = [
        document.getElementById('title').value,
        document.getElementById('body').value,
        document.getElementById('linkUrl').value,
        document.getElementById('imageUrl').value
        ]
}

document.getElementById("form1").addEventListener('submit', storySubmit);

document.getElementById('feedItem0').addEventListener('click', () => {
    console.log("Hello!")
    deleteFeedItem(0);
    getCurrentFeed();
})

document.getElementById('feedItem1').addEventListener('click', () => {
    deleteFeedItem(1);
    getCurrentFeed();
})

document.getElementById('feedItem2').addEventListener('click', () => {
    deleteFeedItem(2);
    getCurrentFeed();
})

console.log(document.getElementById('newsfeed').innerHTML);

// Checks if the user clicks the "Squirrel News" title text and sends them back to home page if so

document.getElementById('home_page').addEventListener('click', function () {
    goToLocation('/');
});