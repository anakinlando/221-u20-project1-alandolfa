document.getElementById('portal_button').addEventListener('click', function () {
    goToLocation('http://my.marist.edu/');
  });

function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
};

let feedOne = new feedItem("4th of July Parade", "Wow!", "https://www.quoteswishesmsg.com/web-stories/4th-of-july-parade-2022-facts-celebration-images", "https://fox8.com/wp-content/uploads/sites/12/2021/06/4th-of-July-Fireworks-7.jpg?w=1280");
let feedTwo = new feedItem("4th of July Parade", "Wow!", "https://www.quoteswishesmsg.com/web-stories/4th-of-july-parade-2022-facts-celebration-images", "https://fox8.com/wp-content/uploads/sites/12/2021/06/4th-of-July-Fireworks-7.jpg?w=1280");
let feedThree = new feedItem("4th of July Parade", "Wow!", "https://www.quoteswishesmsg.com/web-stories/4th-of-july-parade-2022-facts-celebration-images", "https://fox8.com/wp-content/uploads/sites/12/2021/06/4th-of-July-Fireworks-7.jpg?w=1280");

let currentStories = [feedOne, feedTwo, feedThree];

function displayItem(feedItem) {
    document.getElementById('newsfeed').innerHTML +=
    '<img src="' + feedItem.imageUrl + '" class="feedImage"/>'
    + '<a href="' + feedItem.linkUrl + '">' + feedItem.title + '</a><br />'
    + '<p>' + feedItem.body + '</p><hr />';
}

window.addEventListener('load', function() {
    for (i = 0; i < currentStories.length; i++) {
        displayItem(currentStories[i]);
    }
});