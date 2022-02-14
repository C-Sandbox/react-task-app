/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Overview from './/components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: '',
              id: uniqid(), 
              index: 0,
            },
      tasks: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem = (e) => {
    const delID = e.target.dataset.id;
    let delIndex;
    let newArray = this.state.tasks;
    for(let item of newArray) {
      if(item.id === delID) {
        delIndex = this.state.tasks.indexOf(item);
        return;
      }
    }
    newArray.splice(delIndex, 1);
    this.setState({
      tasks: newArray
    })
  }
  handleChange = (e) => {
    this.setState({ 
      task: {
        text: e.target.value,
        id: this.state.task.id,
        index: this.state.task.index,
      }
    });
  };
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '',
              id: uniqid(),
              index: this.state.tasks.length + 1,
            },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">New task:</label>
          <input 
            onChange={this.handleChange}
            value={task.text} 
            type="text" 
            id="taskInput"   
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview items={tasks} deleteFunc={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
