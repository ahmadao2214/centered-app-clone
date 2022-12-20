import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Todo, TodoForm } from "../components"

type TodoScreenNavProps = AppStackScreenProps<"Todo">;

export const TodoScreen: FC<StackScreenProps<TodoScreenNavProps>> = observer(function TodoScreen() {
  const [todos, setTodos] = useState([
    {text: 'Buy coffee'},
    {text: 'Create an app'},
    {text: 'Play with the dog'},
  ])

  const addTodo = (todo: {text: string}) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <Screen style={$container} preset="scroll">
      {todos.map((todo: {text: string}, index: number) => (
        <Todo 
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  paddingTop: 40,
  paddingHorizontal: 20
}
