import React, { useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { TextField } from "./TextField"
import { Icon } from "./Icon"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig'


export interface TodoInputProps {
  addTodo: (todo: {id: string, text: string}) => void;
  style?: StyleProp<ViewStyle>
}


export const TodoInput = observer(function TodoInput({ addTodo }: TodoInputProps) {
  const [text, setText] = useState('')

  const handleSubmit = async() => {
    if(text.length > 0){
      try {
        const docRef = await addDoc(collection(db, "todos"), {
          text
        });
        addTodo({ id: docRef.id, text })
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    console.log('WE ARE HERE')
    setText('')
  }

  return (
    <View style={$formContainer}>
      <TextField
        style={$input}
        placeholder="Add a new todo!"
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
