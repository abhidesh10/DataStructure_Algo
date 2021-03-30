const { performance } = require("perf_hooks");
const fish = ["nemo"];

let t0 = performance.now();
for (let i = 0; i < fish.length; i++) {
  if (fish[i] === "nemo") {
    console.log("Find Nemo");
  }
}
let t1 = performance.now();

console.log(t1 - t0);
