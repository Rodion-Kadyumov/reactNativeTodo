import React, { ChangeEvent, useCallback } from 'react'
import { TaskType } from '../api/tasksApi'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TaskStatuses } from '../../../common/enums/enums'
import Checkbox from 'expo-checkbox'
import { EditableSpan } from '../../../common/components/editableSpan/EditableSpan'
import { Ionicons } from '@expo/vector-icons'

type TasksProps = {
  task: TaskType
  todolistId: string
  changeTaskStatus: (todolistId: string, id: string, status: TaskStatuses) => void
  changeTaskTitle: (todolistId: string, id: string, newTitle: string) => void
  removeTask: (todolistId: string, id: string) => void
}

export const Task = React.memo((props: TasksProps) => {

  const onClickHandler = useCallback(() => props.removeTask(props.todolistId, props.task.id), [props.todolistId, props.task.id])

  const onChangeHandler = useCallback((checked: boolean) => {
    props.changeTaskStatus(props.todolistId, props.task.id, checked ? TaskStatuses.Completed : TaskStatuses.New)
  }, [props.todolistId, props.task.id])

  const onTitleChangeHandler = useCallback((newValue: string) => {
    props.changeTaskTitle(props.todolistId, props.task.id, newValue)
  }, [props.todolistId, props.task.id])

  return (
    <View key={props.task.id} style={props.task.status === TaskStatuses.Completed ? { ...styles.task, opacity: 0.5 } : { ...styles.task }} >
      <View style={{flexDirection: "row"}}>
        <Checkbox
          style={{ marginRight: 12 }}
          value={props.task.status === TaskStatuses.Completed}
          onValueChange={onChangeHandler}
        />
        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} />
      </View>

      <TouchableOpacity style={{ marginLeft: 25 }} onPress={onClickHandler}>
        <Ionicons name='trash-outline' size={24} color={"black"} />
      </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4
  }
})