import React, { Component } from "react";
import TaskItem from "./TaskItem";
import Button from "./Button";

const PLUS = (
  <svg
    className="plusIcon"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
  >
    <g id="+">
      <path
        id="Stroke 112"
        d="M0 0H32.6733"
        transform="translate(2.97028 18.3466)"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Stroke 113"
        d="M0 0V32.6733"
        transform="translate(18.6534 2.66339)"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputTask: false };
  }
  addTask(task) {
    this.props.addOperation(task);
  }
  deleteTask(index) {
    this.props.deleteOperation(index);
  }

  addingTask() {
    let newInputTask = !this.state.inputTask;
    this.setState({ inputTask: newInputTask });
  }

  keyHandler(event) {
    if (this.state.inputTask && event.key === "Enter") {
      this.addTask(event.target.value);
      this.addingTask();
    }
  }

  render() {
    let tasks;
    let inputField;
    if (!this.props.applicationState) {
      let card = document.getElementsByClassName("card")[0];
      card.style.paddingTop = 80 + "px";
      card.style.height = 620 + "px";
      let taskList = this.props.taskList;
      tasks = taskList.map((task, index) => {
        return (
          <TaskItem
            task={task}
            key={task}
            index={index}
            deleteOperation={this.deleteTask.bind(this)}
          />
        );
      });
      if (this.state.inputTask) {
        inputField = (
          <div className="input-field-container">
            <input
              type="text"
              onKeyPress={this.keyHandler.bind(this)}
              className="task-input-field"
              placeholder="Type your task..."
            />
          </div>
        );
      }
    }

    return (
      <div className={this.props.applicationState ? "none" : ""}>
        <ul className="task-list">{tasks}</ul>

        {inputField}
        <Button
          classes="plus-button"
          text={PLUS}
          clickAction={this.addingTask.bind(this)}
        />
      </div>
    );
  }
}

export default TaskPage;
