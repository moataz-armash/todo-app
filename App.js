import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ToDoInput from './components/ToDoInput.js';
import ToDoListComponent from './components/ToDoListComponent.js';
import TodoList from './components/TodoList.js';

const App = () => {
  const [todoList, setTodoList] = useState(new TodoList());
  const [taskToEdit, setTaskToEdit] = useState(null); // Store task being edited

  const addTask = (taskText, color) => {
    if (taskToEdit) {
      todoList.updateTask(taskToEdit.id, taskText, color);
      setTaskToEdit(null);
    } else {
      todoList.addTask(taskText, color);
    }
    setTodoList(new TodoList(todoList.tasks)); // Update state to reflect new task list
  };

  const removeTask = taskId => {
    todoList.removeTask(taskId);
    setTodoList(new TodoList(todoList.tasks));
  };

  const editTask = task => {
    setTaskToEdit(task);
  };

  const reorderTasks = newOrder => {
    todoList.reorderTasks(newOrder);
    setTodoList(new TodoList(todoList.tasks));
  };

  return (
    <View style={styles.container}>
      <ToDoInput addTask={addTask} taskToEdit={taskToEdit} />
      <ToDoListComponent
        tasks={todoList.tasks}
        removeTask={removeTask}
        editTask={editTask}
        reorderTasks={reorderTasks}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

export default App;
