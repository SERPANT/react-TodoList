import React, { Component } from "react";

class Button extends Component {
  clickHandler() {
    this.props.clickAction();
  }
  render() {
    return (
      <div className={this.props.containerClasses}>
        <button
          className={this.props.classes}
          onClick={this.clickHandler.bind(this)}
        >
          <strong>{this.props.text}</strong>
        </button>
      </div>
    );
  }
}

export class DeleteButton extends Component {
  clickHandler() {
    this.props.clickAction(this.props.index);
  }
  render() {
    return (
      <div className={this.props.containerClasses}>
        <button
          className={this.props.classes}
          onClick={this.clickHandler.bind(this)}
        >
          <strong>{this.props.text}</strong>
        </button>
      </div>
    );
  }
}

export default Button;
