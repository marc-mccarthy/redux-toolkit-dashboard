import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import App from "./components/App/App";
import "./index.css";

// put your reducers here!
import passengersReducer from "./redux/reducers/PassengersReducer";
import speedControlReducer from "./redux/reducers/SpeedControlReducer";

// be sure to combine your reducers!
const storeInstance = createStore(
  // reducers,
  combineReducers({
    speedControlReducer,
    passengersReducer,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

export { storeInstance };
