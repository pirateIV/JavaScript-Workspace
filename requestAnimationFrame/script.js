var FADE_DURATION = 2.0 * 1000;

// -1 is simply a flag to indicate if we are rendering the very 1st frame
var startTime = -1.0;

// Function to render current frame (whatever frame that may be)
function render(currTime) {
  var head1 = document.getElementsByTagName("h1")[0];

  // How opaque should head1 be? Its fade started at currTime=0.
  // Over FADE_DURATION ms, opacity goes from 0 to 1
  var opacity = currTime / FADE_DURATION;
  head1.style.opacity = opacity;
}

// Function to
function eachFrame() {
  // Time that animation has been running (in ms)
  // Uncomment the console.log function to view how quickly
  // the timeRunning updates its value (may affect performance)
  var timeRunning = new Date().getTime() - startTime;
  //console.log('var timeRunning = '+timeRunning+'ms');
  if (startTime < 0) {
    // This branch: executes for the first frame only.
    // it sets the startTime, then renders at currTime = 0.0
    startTime = new Date().getTime();
    render(0.0);
  } else if (timeRunning < FADE_DURATION) {
    // This branch: renders every frame, other than the 1st frame,
    // with the new timeRunning value.
    render(timeRunning);
  } else {
    return;
  }
  window.requestAnimationFrame(eachFrame);
}
window.requestAnimationFrame(eachFrame);
