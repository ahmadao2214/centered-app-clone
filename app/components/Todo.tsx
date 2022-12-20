import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { ListItem } from "./ListItem"
import { Icon } from "./Icon";

export interface TodoProps {
  todo: {text: string};
  index: number;
  deleteTodo: (index: number) => void
  style?: StyleProp<ViewStyle>
}


export const Todo = observer(function Todo({todo, index, deleteTodo}: TodoProps) {
  return (
    <ListItem 
      text={todo.text}
      bottomSeparator
      RightComponent={<Icon icon="trash" size={30} onPress={() => deleteTodo(index)} />}
    />
  )
})