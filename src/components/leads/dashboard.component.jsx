import React, { Fragment } from "react";
import Forms from "./forms.component";
import Leads from "./leads.component";

class DashBoard extends React.Component {
  render() {
    return (
      <Fragment>
        <Forms />
        <Leads />
      </Fragment>
    );
  }
}
export default DashBoard;
