import { React, useReducer, useCallback, useEffect } from 'react';
import TodoApiContext from '../todoApiContext';
import { useTodos, usePostTodo, useDeleteTodo, useToggleTodo } from '../../hooks/todos';
import todoService from '../../services/todoService';

function TodoApiContextProvider({ children }) {

  const { todoList, error: todosError, loading: todosLoading } = useTodos();
  const { response: postResponse, loading: postLoading, error: postError, postTodoData } = usePostTodo();
  const { response: delResponse, loading: delLoading, error: delError, deleteTodo } = useDeleteTodo();
  const { response: toggleResponse, loading: toggleLoading, error: toggleError, toggleTodo } = useToggleTodo();

  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [],
  });

  const setTodos = useCallback(async () => {
    try {
      console.log('Fetching todos...');
      if (!todosLoading) {
        const response = await todoService.getTodos();
        dispatch({ type: 'TODO_List', data: response.data.data });
      }
    } catch (error) {
      // Handle error
      console.error('Error fetching todos:', error);
    }
  }, [todosLoading, dispatch]);

  useEffect(() => {
    setTodos();
  }, [setTodos]);

//Add Todo
  const addTodo = useCallback(async (task) => {
    try {
      const response = await postTodoData({ task });
      setTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }, [postTodoData, setTodos]);

//Delete Todo
  const delTodo = useCallback(async (id) => {
    try {
      const response = await deleteTodo(id);
      setTodos();
    } catch (error) {
    }
  }, [deleteTodo, setTodos]);

//Toggle Todo
  const togTodo = useCallback(async (id) => {
    try {
      const response = await toggleTodo(id);
      setTodos();
    } catch (error) {
    }
  }, [toggleTodo, setTodos]);

  const todosContextValues = {
    todos,
    setTodos,
    addTodo, 
    togTodo,
    delTodo,
  };

  return (
    <TodoApiContext.Provider value={todosContextValues}>
      {children}
    </TodoApiContext.Provider>
  );
}

export default TodoApiContextProvider;

const reducer = (state, action) => {
  switch (action.type) {
    case 'TODO_List':
      console.log('action', action.data);
      return {
        ...state,
        todos: action.data,
      };

    default:
      return state;
  }
};
