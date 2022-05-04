import React, { StrictMode } from "react";
import "./App.css";
import {
  ApiClient,
  Masher,
  DefaultMasherProps,
} from "@moviemasher/client-react";
import "@moviemasher/client-react/dist/moviemasher.css";
function App() {
  const applicationOptions = { previewSize: { width: 480, height: 270 } };
  const options = DefaultMasherProps(applicationOptions);
  const masher = <Masher {...options} />;
  const editor = <ApiClient>{masher}</ApiClient>;
  const strictMode = <StrictMode>{editor}</StrictMode>;
  return <div className="app">{strictMode}</div>;
}

export default App;
