class Timer {
  constructor(d, s, p) {
    this.durationInput = d;
    this.startButton = s;
    this.pauseButton = p;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick();
    this.intervalID = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.intervalID);
  };

  tick = () => {
    if (!this.timeRemaining) {
      this.pause();
    } else {
      this.timeRemaining--;
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

let d = document.querySelector("#duration");
let s = document.querySelector("#start");
let p = document.querySelector("#pause");

let timer = new Timer(d, s, p);
