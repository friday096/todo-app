import * as React from 'react';
import TodosApiContext from '../../contexts/todoApiContext';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosApiContext);

  const calculateChecked = () => {
    const completedTasksCount = todos.filter(todo => todo.status).length;

    return <span>{completedTasksCount}</span>;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
