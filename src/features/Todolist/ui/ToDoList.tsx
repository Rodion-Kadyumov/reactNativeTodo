import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TaskType } from '../api/todolistApi'
import { TouchableOpacity, View } from 'react-native'
import { EditableSpan } from '../../../common/components/editableSpan/EditableSpan'
import { Ionicons } from '@expo/vector-icons'
import { AddItemForm } from '../../../common/components/addItem/AddItemForm'
import { Task } from '../../Task/ui/Task'
import { TaskStatuses } from '../../../common/enums/enums'
import { FilterValueType } from '../../../App/hooks/useApp'
import { TodoListDomenTypes } from './Todolists'
import { fetchTasksTC } from '../../Task/model/tasks-reducer'

type PropsType = {
  demo?: boolean
  todolist: TodoListDomenTypes
  tasks: TaskType[]
  removeTask: (todolistId: string, taskId: string) => void
  removeTodolist: (todolistId: string) => void
  changeTaskTitle: (todolistId: string, taskId: string, newTitle: string) => void
  changeTodolistTitle: (todolistId: string, newTitle: string) => void
  addTask: (todolistId: string, title: string) => void
  changeTaskStatus: (todolistId: string, id: string, status: TaskStatuses) => void
}

export const TodoList = React.memo(({ demo = false, ...props }: PropsType) => {

  const dispatch = useDispatch()

  useEffect(() => {
    if (demo) {
      return
    }
    const thunk = fetchTasksTC(props.todolist.id)
    dispatch(thunk)
  })

  const addTask = useCallback((title: string) => {
    props.addTask(props.todolist.id, title)
  }, [props.todolist.id, props.addTask])

  const removeTodolist = () => {
    props.removeTodolist(props.todolist.id)
  }

  const changeTodolistTitle = useCallback((title: string) => {
    props.changeTodolistTitle(props.todolist.id, title)
  }, [props.todolist.id, props.changeTodolistTitle])

  let tasksForTodoList = props.tasks

  return (
    <View>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <EditableSpan value={props.todolist.title} onChange={changeTodolistTitle} />
        <TouchableOpacity style={{marginLeft: 25}} onPress={removeTodolist}>
          <Ionicons name='trash-outline' size={24} color={"black"} />
        </TouchableOpacity>
      </View>
      <AddItemForm addItem={addTask} disabled={props.todolist.entityStatus === "loading"} />
      <View style={{padding: 8}}>
        {tasksForTodoList.length === 0 ? (
          <p>Тасок нет</p>
        ) : (
          <View>
            {tasksForTodoList.map((t) => {
              return (
                <Task key={t.id}
                  task={t}
                  todolistId={props.todolist.id}
                  removeTask={props.removeTask}
                  changeTaskTitle={props.changeTaskTitle}
                  changeTaskStatus={props.changeTaskStatus} />
              )
            })}
          </View>
        )}
      </View>
    </View>
  )
})