let d = document.querySelector("#duration");
let s = document.querySelector("#start");
let p = document.querySelector("#pause");

let timer = new Timer(d, s, p, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer just ticked");
  },
  onComplete() {
    console.log("Timer finished");
  },
});
