import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type PropsType = {
  value: string
  onChange: (newValue: string) => void
}

export const EditableSpan = React.memo((props: PropsType) => {

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(props.value)

  const activateEditeMode = () => {
    setEditMode(true)
    setTitle(props.value)
  }

  const activateViewMode = () => {
    setEditMode(false)
    props.onChange(title)
  }

  const changeTitle = (e: string) => {
    setTitle(e)
  }

  return editMode
    ? <View style={{ flexDirection: "row" }}>
      <TextInput
        style={styles.input}
        onChangeText={changeTitle}
        value={title}
      />
      <View>
        <Ionicons name="checkmark" size={24} color={"black"} onPress={activateViewMode} />
      </View>
    </View>
    : <Text style={{fontSize: 18, fontWeight: 500}} onLongPress={activateEditeMode}>{props.value}</Text>
})

const styles = StyleSheet.create({
  input: {
    width: 150,
    backgroundColor: "#ffdbdb"
  }
})