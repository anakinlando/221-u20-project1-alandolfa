// Opens a new Squirrel Wikipedia tab if user presses portal button

document.getElementById('portal_button').addEventListener('click', function () {
    openTab('https://en.wikipedia.org/wiki/Squirrel');
  });

// Changes the HTML of the page to display the content of the passed feedItem

function displayItem(feedItem) {
    document.getElementById('newsfeed').innerHTML +=
    '<img src="' + feedItem.imageUrl + '" class="feedImage"/><br />'
    + '<b><a href="' + feedItem.linkUrl + '">' + feedItem.title + '</a></b><br />'
    + '<p>' + feedItem.body + '</p><hr />';
}

function getCurrentFeed() {
    fetch(
        '/api/currentStories'
    ).then((res) => {
        res.json().then(
            (myData) => {
                for (data in myData) {
                    displayItem(myData[data]);
                }
            }
        )
    },
    () => {
        console.log('failure of retrieving stories!');s
    })
}

// W3C event listener that passes currentStories through displayItem on page load

window.addEventListener('load', function() {
    getCurrentFeed();
});

// Checks if the user clicks the "Squirrel News" title text and sends them back to home page if so

document.getElementById('home_page').addEventListener('click', function () {
    goToLocation('/');
});