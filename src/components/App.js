import logo from '../logo.svg';
import '../App.css';
import Overview from './Overview';
import uniqid from 'uniqid';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tasks: [],
          task: {
            text: '',
            id: uniqid()
          }
      };
  }

  handleChange = (e) => {
      this.setState({
          task: {
              text: e.target.value,
              id: this.state.task.id
          }
      });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
          tasks: this.state.tasks.concat(this.state.task),
          task: {
              text: '',
              id: uniqid()
          }
      });
  };

  removeElement = e => {
    console.log(e.target);
    if(e.target.tagName !== 'BUTTON') {
        return;
    }
    this.setState({
        tasks: this.state.tasks.filter(task => task.text !== e.target.parentElement.childNodes[1].textContent)
    });
  }

  render() {
    const {task, tasks} = this.state;

    return(
        <div>
          <form onSubmit={this.handleSubmit}> 
              <input onChange={this.handleChange} value={task.text}></input>
              <button type="submit">Add Task</button>
              
          </form>
          <Overview tasks={tasks} removeTask={this.removeElement}/>
        </div>
      )
  }
}
