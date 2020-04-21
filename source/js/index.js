import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {lootboxes} from "./mocks/lootbox.js";

ReactDOM.render(
  <App lootboxes={lootboxes} />,
  document.querySelector(`#root`)
);
