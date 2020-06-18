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
    let timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  };

  // onDurationChange() {}
}

let d = document.querySelector("#duration");
let s = document.querySelector("#start");
let p = document.querySelector("#pause");

let timer = new Timer(d, s, p);
