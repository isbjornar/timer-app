let d = document.querySelector("#duration");
let s = document.querySelector("#start");
let p = document.querySelector("#pause");
let circle = document.querySelector("circle");

let perimeter = circle.getAttribute("r") * 2 * Math.PI;
let duration;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;
let timer = new Timer(d, s, p, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute("stroke-dashoffset", (perimeter * timeRemaining) / duration - perimeter);
  },
  onComplete() {
    console.log("Timer finished");
  },
});
