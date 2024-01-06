import * as React from 'react';
import { Checkbox } from '../checkbox';
import todoApiContext from '../../contexts/todoApiContext';
import { useTodos, useDeleteTodo } from '../../hooks/todos';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos, delTodo, togTodo } = React.useContext(todoApiContext);
  const { todoList, error } = useTodos();

  const handleDelete = async (id) => {
    console.log('handleDelete', id)
    delTodo(id)
  };

  const toggleCheck = async (id) => {
    console.log('toggleCheck', id)
    togTodo(id)
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Todo List:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem._id}
              label={todoItem.task}
              checked={todoItem.status}
              onClick={() => toggleCheck(todoItem._id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem._id)}
              onDelete={() => handleDelete(todoItem._id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
