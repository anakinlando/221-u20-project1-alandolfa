/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */

// Determine if key 'e' is a spacebar and go to /feed if so

document.addEventListener('keyup', function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
});

// Check if there is a click event on the button and go to /feed if so

document.getElementById('fade_text').addEventListener('click', function () {
  goToLocation('/feed');
});