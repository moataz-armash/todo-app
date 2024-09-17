import React from 'react';
import {FlatList, View, Text, Button, StyleSheet} from 'react-native';

const ToDoListComponent = ({tasks, removeTask, editTask}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => (
        <View style={[styles.taskItem, {backgroundColor: item.color}]}>
          <Text>{item.text}</Text>
          <View style={styles.buttons}>
            <Button title="Edit" onPress={() => editTask(item)} />
            <Button title="Delete" onPress={() => removeTask(item.id)} />
          </View>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});

export default ToDoListComponent;
