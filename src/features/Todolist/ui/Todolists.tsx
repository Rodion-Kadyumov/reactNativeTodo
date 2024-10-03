import { useCallback, useEffect } from 'react'
import { AddItemForm } from '../../../common/components/addItem/AddItemForm'
import { useSelector } from 'react-redux'
import { TodoList } from './ToDoList'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { globalStyles } from '../../../../global-styles'
import { AppRootStateType, useAppDispatch } from '../../../App/store'
import { FilterValueType, TasksStateType } from '../../../App/hooks/useApp'
import { TaskStatuses } from '../../../common/enums/enums'
import { addTaskAC, addTaskTC, removeTaskAC, updateTaskTC } from '../../Task/model/tasks-reducer'
import { addTodolistTC, changeTodolistTitleTC, fetchTodolistsTC, removeTodolistTC } from '../model/todolists-reducer'
import { TodolistType } from '../api/todolistApi'
import { RequestStatusType } from '../../../App/app-reducer'


type PropsType = {
  demo?: boolean
}

export const Todolists = ({ demo = false }: PropsType) => {

  const todolists = useSelector<AppRootStateType, TodoListDomenTypes[]>(state => state.todolists)
  const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!demo) {
      dispatch(fetchTodolistsTC())
    }
  }, [demo, dispatch])

  const removeTask = useCallback((todolistId: string, taskId: string) => {
    const thunk = removeTaskAC(todolistId, taskId)
    dispatch(thunk)
  }, [])

  const addTask = useCallback((todolistId: string, title: string) => {
    const thunk = addTaskTC(todolistId, title)
    dispatch(thunk)
  }, [])

  const changeStatus = useCallback((todolistId: string, id: string, status: TaskStatuses) => {
    const thunk = updateTaskTC(todolistId, id, {status})
    dispatch(thunk)
  }, [])

  const changeTaskTitle = useCallback((todolistId: string, id: string, title: string) => {
    const thunk = updateTaskTC(todolistId, id, {title})
    dispatch(thunk)
  }, [])

  const removeTodolist = useCallback((todolistId: string) => {
    const thunk = removeTodolistTC(todolistId)
    dispatch(thunk)
  }, [])

  const changeTodolistTitle = useCallback((todolistId: string, title: string) => {
    const thunk = changeTodolistTitleTC(todolistId, title)
    dispatch(thunk)
  }, [])

  const addTodolist = useCallback((title: string) => {
    const thunk = addTodolistTC(title)
    dispatch(thunk)
  }, [])

  return (
    <View style={{justifyContent: "space-between"}}>
      <View>
        {todolists.map((tl) => {
          let allTodolistTasks = tasks[tl.id]
          return (
            <View key={tl.id}>
              <View style={{padding: 10}}>
                <TodoList
                  key={tl.id}
                  todolist={tl}
                  tasks={allTodolistTasks}
                  removeTask={removeTask}
                  addTask={addTask}
                  changeTaskStatus={changeStatus}
                  changeTaskTitle={changeTaskTitle}
                  removeTodolist={removeTodolist}
                  changeTodolistTitle={changeTodolistTitle}
                  demo={demo}
                />
              </View>
            </View>
          )
        })}
      </View>
      <View style={[globalStyles.border, {paddingHorizontal: 10}]}>
        <AddItemForm addItem={addTodolist} />
      </View>
    </View>
  )
}

export type TodoListDomenTypes = TodolistType & {
  filter: FilterValueType
  entityStatus: RequestStatusType
}