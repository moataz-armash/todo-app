import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const ToDoInput = ({addTask, taskToEdit}) => {
  const [task, setTask] = useState('');
  const [color, setColor] = useState('#ffffff'); // Add color input

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task, color); // Pass color as well
      setTask('');
      setColor('#ffffff'); // Reset color
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={taskToEdit ? 'Edit the task' : 'Add a new task'}
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <TextInput
        placeholder="Color (e.g., #FF0000)"
        style={styles.input}
        value={color}
        onChangeText={setColor}
      />
      <Button title={taskToEdit ? 'Edit' : 'Add'} onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default ToDoInput;
