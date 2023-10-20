class Stopwatch {
  constructor() {
    this.startTime = null;
    this.elapsedTime = 0;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      this.startTime = new Date().getTime() - this.elapsedTime;
      this.isRunning = true;
      this.update();
    }
  }

  stop() {
    if (this.isRunning) {
      this.elapsedTime = new Date().getTime() - this.startTime;
      this.isRunning = false;
    }
  }

  reset() {
    this.elapsedTime = 0;
    if (this.isRunning) {
      this.startTime = new Date().getTime();
    }
  }

  update() {
    const self = this;
    function display() {
      if (self.isRunning) {
        const currentTime = new Date().getTime();
        self.elapsedTime = currentTime - self.startTime;
        console.log(`Elapsed time: ${self.elapsedTime} ms`);
        requestAnimationFrame(display);
      }
    }
    requestAnimationFrame(display);
  }
}

const stopwatch = new Stopwatch();
stopwatch.start(); // Start the stopwatch
// setTimeout(() => stopwatch.stop(), 3000); // Stop after 3 seconds
setTimeout(() => stopwatch.start(), 5000); // Resume after 5 seconds
// setTimeout(() => stopwatch.reset(), 8000); // Reset after 8 seconds
