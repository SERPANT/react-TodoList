import React, { Component } from "react";
import TaskPage from "./TaskPage";
import NoTaskPage from "./NoTaskPage";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { taskList: [] };
  }

  switchToTask() {
    this.setState({
      taskList: ["empty list", "add something", "I am so frustrated"]
    });
  }

  deleteTask(index) {
    let tempTaskArray = this.state.taskList;
    tempTaskArray.splice(index, 1);
    this.setState({ taskList: tempTaskArray });
  }

  addTask(task) {
    let tempTaskArray = this.state.taskList;
    tempTaskArray.push(task);
    this.setState({ taskList: tempTaskArray });
  }

  render() {
    let taskNumber = this.state.taskList.length;
    let displayFront = taskNumber <= 0 ? true : false;

    return (
      <div className="card shadow gradient">
        <NoTaskPage
          applicationState={displayFront}
          clickAction={this.switchToTask.bind(this)}
        />

        <TaskPage
          applicationState={displayFront}
          taskList={this.state.taskList}
          deleteOperation={this.deleteTask.bind(this)}
          addOperation={this.addTask.bind(this)}
        />
      </div>
    );
  }
}

export default Card;
