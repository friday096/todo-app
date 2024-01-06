import axios from 'axios';

class TodoService {
  static async getTodos() {
    return await axios.get('http://localhost:4000/get');
  }

  static async insertTodo(todoData) {
    return await axios.post('http://localhost:4000/create', todoData);
  }

  static async toggleTodo(id) {
    return await axios.put(`http://localhost:4000/toggle/${id}`);
  }

  static async deleteTodo(id) {
    return await axios.delete(`http://localhost:4000/delete/${id}`);
  }
}

export default TodoService;
