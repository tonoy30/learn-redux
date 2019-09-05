import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";

class Forms extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  resetFrom = () =>
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.resetFrom();
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <Fragment>
        <div className="card card-body mt-4 mb-4">
          <h2>Add Lead</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default connect(
  null,
  { addLead }
)(Forms);
