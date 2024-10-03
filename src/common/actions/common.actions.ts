import { TasksStateType } from '../../App/hooks/useApp'
import { createAction } from '@reduxjs/toolkit'
import { TodoListDomenTypes } from '../../features/Todolist/ui/Todolists'

export type ClearTasksAndTodolists = {
  tasks: TasksStateType
  todolists: TodoListDomenTypes[]
}
export const clearTasksAndTodolists = createAction<ClearTasksAndTodolists>('common/clear-tasks-todolists')
