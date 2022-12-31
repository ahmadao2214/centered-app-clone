import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { ListItem } from "./ListItem"
import { Icon } from "./Icon";
import { TextInput } from "react-native-gesture-handler";
import { TodoType } from "../screens/TodoScreen";

export interface TodoProps {
  todo?: TodoType;
  input: string;
  setInput: (newInput) => void
  editTodo: (id: string, input: string) => void;
  deleteTodo: (index: string) => void;
  style?: StyleProp<ViewStyle>
}

export const TodoList = observer(function TodoList({
  input, setInput, todo, editTodo, deleteTodo
}: TodoProps) {
  return (
    <ListItem 
      bottomSeparator
      LeftComponent={
        <TextInput
          value={input}
          onChange={newInput => setInput(newInput)} 
          onBlur={() => editTodo(todo.id, input)}
        />
      }
      RightComponent={<Icon icon="trash" size={30} onPress={() => deleteTodo(todo.id)} />}
    />
  )
})