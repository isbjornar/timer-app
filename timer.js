class Timer {
  constructor(d, s, p, c, r = 10) {
    this.durationInput = d;
    this.startButton = s;
    this.pauseButton = p;
    this.timerResolution = r;
    if (c) {
      this.onStart = c.onStart;
      this.onTick = c.onTick;
      this.onComplete = c.onComplete;
    }
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.intervalID = setInterval(this.tick, this.timerResolution);
  };

  pause = () => {
    clearInterval(this.intervalID);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining -= this.timerResolution / 1000;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }

  // onDurationChange() {}
}
