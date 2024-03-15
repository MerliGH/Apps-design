import React, { useState } from 'react';
//import { StatusBar, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { StatusBar, StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (option) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data = await response.json();
      let filteredData;
      switch (option) {
        case 1:
          filteredData = data.map(todo => ({ id: todo.id }));
          break;
        case 2:
          filteredData = data.map(todo => ({ id: todo.id, title: todo.title }));
          break;
        case 3:
          filteredData = data.filter(todo => !todo.completed).map(todo => ({ id: todo.id, title: todo.title }));
          break;
        case 4:
          filteredData = data.filter(todo => todo.completed).map(todo => ({ id: todo.id, title: todo.title }));
          break;
        case 5:
          filteredData = data.map(todo => ({ id: todo.id, userId: todo.userId }));
          break;
        case 6:
          filteredData = data.filter(todo => todo.completed).map(todo => ({ id: todo.id, userId: todo.userId }));
          break;
        case 7:
          filteredData = data.filter(todo => !todo.completed).map(todo => ({ id: todo.id, userId: todo.userId }));
          break;
        default:
          filteredData = data;
      }
      setTodos(filteredData);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
    setIsLoading(false);
  };

  return (
    //<ImageBackground source={require('../home/pictures/downloads/nfl.png'')} style={styles.backgroundImage}>
  
    <View style={styles.container}>
      <Text style={styles.header}>Examen parcial II: Diseño de aplicaciones</Text>
      <Text style={styles.subHeader}>Alumno: Higuera Sanchez Dulce Mariela   Grupo: 4A   Fecha: Marzo-14-2024</Text>
      <View style={styles.buttonContainer}>
        <Button title="TODOS (IDs)" onPress={() => fetchData(1)} color="#6D4C41" style={styles.button} />
        <Text>   </Text>
        <Button title="TODOS (IDs y Títulos)" onPress={() => fetchData(2)} color="#6D4C41" style={styles.button} />
        <Text>   </Text>
        <Button title="SIN RESOLVER (IDs y Títulos)" onPress={() => fetchData(3)} color="#6D4C41" style={styles.button} />
        <Text>   </Text>
        <Button title="RESUELTOS (IDs y Títulos)" onPress={() => fetchData(4)} color="#6D4C41" style={styles.button} />
        <Text>   </Text>
        <Button title="TODOS (IDs y UserID)" onPress={() => fetchData(5)} color="#6D4C41" style={styles.button} />
        <Text>   </Text>
        <Button title="RESUELTOS (IDs y UserID)" onPress={() => fetchData(6)} color="#6D4C41" style={styles.button} />
        <Text>   </Text>
        <Button title="SIN RESOLVER (IDs y UserID)" onPress={() => fetchData(7)} color="#6D4C41" style={styles.button} />
      </View>
      {isLoading ? (
        <Text>Cargando...</Text>
      ) : (
        <ScrollView style={styles.listContainer}>
          {todos.map(todo => (
            <Text key={todo.id}>
              ID: {todo.id} {todo.title && `- Título: ${todo.title}`} {todo.userId && `- UserID: ${todo.userId}`}
            </Text>
          ))}
        </ScrollView>
      )}
      <StatusBar style="auto" />
    </View>
    //</ImageBackground>
);
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
  },
  
    button: {
      backgroundColor: '#6D4C41',
      borderRadius: 20,
      paddingVertical: 15,
      paddingHorizontal: 25,
      margin: 5,
      fontSize: 30, // Aquí se cambia el tamaño de la fuente a 18
      fontWeight: 'bold',
    },
  
  
    container: {
      flex: 1,
      backgroundColor: '#F5F5DC', // Cambia el color de fondo a un café clarito
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 30,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});