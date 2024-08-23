import "./styles.css";

import { Manager } from "./manager";

const manager = new Manager();
setInterval(() => {
  document.getElementById("app")!.innerHTML = `hello ${manager.retrieved}
  `;
}, 1000);
