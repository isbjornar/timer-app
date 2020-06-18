class Timer {
  constructor(d, s, p) {
    this.durationInput = d;
    this.startButton = s;
    this.pauseButton = p;
    this.startButton.addEventListener("click", this.start);
  }
  start() {
    console.log("Time to start!");
  }
  pause() {}
  onDurationChange() {}
  tick() {}
}

let d = document.querySelector("#duration");
let s = document.querySelector("#start");
let p = document.querySelector("#pause");

let timer = new Timer(d, s, p);
