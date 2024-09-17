import TodoItem from './TodoItem';

class TodoList {
  constructor(tasks = []) {
    this.tasks = [...tasks]; // Clone the tasks array to avoid direct mutation
  }

  addTask(text, color) {
    const newTask = new TodoItem(Math.random().toString(), text, color);
    this.tasks = [...this.tasks, newTask]; // Return a new array with the new task added
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id); // Return a new filtered array
  }

  updateTask(id, newText, newColor) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? {...task, text: newText, color: newColor} : task,
    ); // Return a new array with the updated task
  }

  reorderTasks(newOrder) {
    this.tasks = [...newOrder]; // Clone the new order array
  }
}

export default TodoList;
