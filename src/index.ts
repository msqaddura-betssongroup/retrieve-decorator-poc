import "./styles.css";

import { Pilot } from "./pilot";

const pilot1 = new Pilot(1);
setInterval(() => {
  document.getElementById(
    "pilot_1"
  )!.innerHTML = `Pilot(${pilot1.id}) Retrieved : ${pilot1.retrieved}
  `;
}, 500);

const pilot2 = new Pilot(2);
setInterval(() => {
  document.getElementById(
    "pilot_2"
  )!.innerHTML = `Pilot(${pilot2.id}) Retrieved : ${pilot2.retrieved}
  `;
}, 500);

const pilot3 = new Pilot(3);
setInterval(() => {
  document.getElementById(
    "pilot_3"
  )!.innerHTML = `Pilot(${pilot3.id}) Retrieved : ${pilot3.retrieved}
  `;
}, 500);

console.log(pilot1, pilot2, pilot3);
