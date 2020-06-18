class Timer {
  constructor(d, s, p, c) {
    this.durationInput = d;
    this.startButton = s;
    this.pauseButton = p;
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
      this.onStart();
    }
    this.tick();
    this.intervalID = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.intervalID);
  };

  tick = () => {
    if (!this.timeRemaining) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining--;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }

  // onDurationChange() {}
}
