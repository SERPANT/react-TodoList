import React, { Component } from "react";
import HotAir from "./HotAir";
import Button from "./Button";
class NoTaskPage extends Component {
  clickHandler() {
    this.props.clickAction();
  }
  render() {
    let displayFront = this.props.applicationState;

    return (
      <div className={displayFront ? "" : "none"}>
        <div className="ballon-container">
          <HotAir />
        </div>
        <div className="day-info-button">
          <div className="day-info">
            <div className="heading"> Your day is still Empty...</div>
            <div className="subheading">
              Put in some tasks and make your day!
            </div>
          </div>
          <Button
            containerClasses="add-container"
            classes="shadow button"
            text="ADD"
            clickAction={this.clickHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default NoTaskPage;
