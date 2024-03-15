// vistas/TodoListScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList'; // Importar componente de lista de tareas

const TodoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
      <TodoList /> {/* Utilizar el componente de lista de tareas */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TodoListScreen;
