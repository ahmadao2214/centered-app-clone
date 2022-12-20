import React, { useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { TextField } from "./TextField"
import { Icon } from "./Icon"

export interface TodoFormProps {
  addTodo: (todo: {text: string}) => void;
  style?: StyleProp<ViewStyle>
}


export const TodoForm = observer(function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if(text.length > 0){
      addTodo({ text })
      setText('')
    }
  }

  return (
    <View style={$formContainer}>
      <TextField
        style={$input}
        placeholder="Add a new todo..."
        onChangeText={(text) => setText(text)}
        RightAccessory={() => <Icon icon="add" size={30} onPress={handleSubmit} />}
      />
    </View>
  )
})

const $formContainer: ViewStyle = {
  // borderWidth: 1,
  // borderColor: 'red',
}

const $input = {
  // borderWidth: 1,
  // borderColor: '#ddd',
}
