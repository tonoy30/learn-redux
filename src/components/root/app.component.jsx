import React, { Fragment } from "react";
import HomePage from "./../navbar/navbar.component";
import DashBoard from "../leads/dashboard.component";

import { Provider } from "react-redux";
import { store } from "./../../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <HomePage />
          <div className="container">
            <DashBoard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
