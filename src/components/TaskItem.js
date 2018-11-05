import React, { Component } from "react";
import { DeleteButton } from "./Button";

class TaskItem extends Component {
  deleteTask(index) {
    this.props.deleteOperation(index);
  }
  render() {
    return (
      <li className="task">
        <div className="task-item-container clearfix">
          <div className="text-info">{this.props.task}</div>
          <DeleteButton
            text="x"
            containerClasses="delete-button-container"
            classes="delete-button"
            clickAction={this.deleteTask.bind(this)}
            index={this.props.index}
          />
        </div>
      </li>
    );
  }
}

export default TaskItem;
