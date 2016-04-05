import React from "react";
import { render } from "react-dom";

import createApp from "./components/App";

const App = createApp(React);

render(
  <App />,
  document.getElementById("app")
);
