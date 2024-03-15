// components/TodoItem.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ title, completed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, completed && styles.completed]}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
});

export default TodoItem;
