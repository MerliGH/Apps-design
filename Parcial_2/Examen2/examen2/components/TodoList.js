// components/TodoList.js

import React from 'react';
import { View } from 'react-native';
import TodoItem from './TodoItem'; // Importar componente de elemento de tarea
import TodoModel from '../models/TodoModel'; // Importar modelo de tarea

const TodoList = () => {
  // Aquí podrías usar el modelo para crear una lista de tareas y pasarla a los elementos de la lista
  const todos = [
    new TodoModel(1, 'Tarea 1'),
    new TodoModel(2, 'Tarea 2'),
    new TodoModel(3, 'Tarea 3', true),
  ];

  return (
    <View>
      {todos.map(todo => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </View>
  );
};

export default TodoList;
