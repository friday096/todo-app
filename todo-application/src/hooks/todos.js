import { useState, useEffect } from 'react';
import todoService from '../services/todoService';
 
function useTodos(params) {
  const [todoList, setTodos] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchTodos = async () => {
      console.log('Api-------Fetching todos...');

      try {
        const response = await todoService.getTodos();
        setTodos(response.data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchTodos();
  }, []);

  return { todoList, error };
}


const usePostTodo = (params) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postTodoData = async (todoData) => {

    setLoading(true);

    try {
      const response =  await todoService.insertTodo(todoData);
      setResponse(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, postTodoData };
};

const useDeleteTodo = (params) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteTodo = async (todoData) => {

    setLoading(true);

    try {
      const response =  await todoService.deleteTodo(todoData);

      setResponse(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, deleteTodo };
};

const useToggleTodo = (id) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTodo = async (id) => {
    try {
      const response =  await todoService.toggleTodo(id);

      setResponse(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, toggleTodo };
};

export { useTodos, usePostTodo, useToggleTodo, useDeleteTodo };
