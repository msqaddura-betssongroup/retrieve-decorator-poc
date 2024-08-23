import "./style.css";
import { Manager } from "./manager";

const manager = new Manager();
setInterval(() => {
  document.querySelector<HTMLDivElement>(
    "#app"
  )!.innerHTML = `hello ${manager.retrieved}
  `;
}, 1000);
