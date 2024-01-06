import * as React from 'react';
import TodoApiContext from '../../contexts/todoApiContext';
import './todo-form.scss';

export const TodoForm = () => {
  const { addTodo } = React.useContext(TodoApiContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
      addTodo(task);
      setTask('');
    
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
