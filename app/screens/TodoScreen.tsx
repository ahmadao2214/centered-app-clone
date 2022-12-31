import React, { FC, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, TodoList, TodoInput } from "../components"
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig'

type TodoScreenNavProps = AppStackScreenProps<"Todo">;

export type TodoType = {
  id: string;
  text: string
}

export const TodoScreen: FC<StackScreenProps<TodoScreenNavProps>> = observer(function TodoScreen() {
  const [inputs, setInputs] = useState({})
  const [todos, setTodos] = useState([])

  const fetchData = async () => {
    const docRef = doc(db, "todos");
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      // setTodos(docSnap.data() as [])
      console.log(docSnap)
    }
    else{
      console.log("No such document!")
    }
  }

  useEffect(() => {
   fetchData() 
  }, [])

  const addTodo = (todo: TodoType) => {
    setTodos([...todos, todo]);
  }

  const editTodo = (id, text) => {
    setTodos((prevTodo) => prevTodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      }
      return todo
    }))
  }

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <Screen style={$container} preset="scroll">
      {todos.map((todo: TodoType, index: number) => {
      const input = inputs[todo.id] || todo.text
      const setInput = (newInput: string) => setInputs((prevInputs) => ({ ...prevInputs, [todo.id]: newInput }))
      return (
        <TodoList 
          key={index}
          todo={todo}
          input={input}
          setInput={setInput}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      )})}
      <TodoInput addTodo={addTodo} />
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  paddingTop: 40,
  paddingHorizontal: 20
}
