import { TaskPriority, TaskStatuses } from "../../../common/enums/enums"
import { instance } from "../../../common/instance/instance"
import { BaseResponse } from "../../../common/types"

export const todolistApi = {
  getTodolists() {
    return instance.get<Array<TodolistType>>('/todo-lists')
  },

  createTodolist(title: string) {
    return instance.post<BaseResponse<{ item: TodolistType }>>('/todo-lists', { title })
  },

  deleteTodolist(id: string) {
    return instance.delete<BaseResponse>(`/todo-lists/${id}`)
  },

  updateTodolist(id: string, title: string) {
    return instance.put<UpdateTaskType>(`/todo-lists/${id}`, { title })
  },
}

// types

export type TodolistType = {
  id: string
  title: string
  addedDate: string
  order: number
}

export type CreateTodolistType = {
  result: number
  messages: Array<string>
  data: {
    item: TodolistType
  }
}

export type TaskType = {
  description: string
  title: string
  status: TaskStatuses
  priority: TaskPriority
  startDate: string
  deadline: string
  id: string
  todolistId: string
  order: number
  addedDate: string
  isDone?: boolean
}

export type UpdateTaskType = {
  description: string
  title: string
  status: number
  priority: number
  startDate: string
  deadline: string
}