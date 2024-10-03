import { Ionicons } from '@expo/vector-icons'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

type PropsType = {
  addItem: (title: string) => void
  disabled?: boolean
}

export const AddItemForm = React.memo(({ addItem, disabled = false }: PropsType) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState<string | null>(null)

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title.trim())
      setTitle('')
    } else {
      setError('Title is required')
    }
  }

  const onChangeHandler = (event: string) => {
    setTitle(event)
  }

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null)
    }
    if (event.key === 'Enter') {
      addItemHandler()
    }
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeHandler}
        value={title} />
      <View>
        <TouchableOpacity>
          <Ionicons name="add" size={24} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  input: {
    width: 150,
    backgroundColor: "#ffdbdb"
  }
})