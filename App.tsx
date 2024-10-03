import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { ReactElement, ReactNode, useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Input } from './Input';
import { globalStyles } from './global-styles';
import { Main } from './src/App/Main';
import { Provider } from 'react-redux';
import { store } from './src/App/store';

export default function App() {

  const [value, setValue] = useState("")
  const [show, setShow] = useState(0)
  const [tasks, setTasks] = useState([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS", isDone: true },
    { id: 1, title: "React native", isDone: false }
  ])


  const addTask = () => {
    const newTask = { id: tasks.length + 1, title: value, isDone: false }
    setTasks([newTask, ...tasks])
    setValue("")
  }

  const changeStatus = (taskId: number, status: boolean) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, isDone: status } : t))
  }

  const changeTitle = (taskId: number, title: string) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, title } : t))
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        < Main />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#316445',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    // width: "60%",
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 8,
    // marginBottom: 15
  },
  boxTask: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5
  }
});