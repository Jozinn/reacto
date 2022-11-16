import React from 'react'

function Overview(props) {
  const {tasks, removeTask} = props;
    return (
    <ul>
        {props.tasks.map((task, i) => {
            i++;
            return (<li key={task.id} onClick={props.removeTask}>
                {i + '. '}
                {task.text} 
                <button type="button">Remove Task</button>
              </li>);
        })}
    </ul>
  );
}

export default Overview;