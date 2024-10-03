import { TaskPriority, TaskStatuses } from "../../../common/enums/enums";
import { instance } from "../../../common/instance/instance";
import { BaseResponse } from "../../../common/types";
import { AxiosResponse } from "axios";

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<getTasksType>(`todo-lists/${todolistId}/tasks`)
  },

  deleteTasks(todolistId: string, taskId: string) {
    return instance.delete<BaseResponse>(`todo-lists/${todolistId}/tasks/${taskId}`)
  },

  createTasks(todolistId: string, title: string) {
    return instance.post<BaseResponse<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks`, { title })
  },

  updateTasks(todolistId: string, tasksId: string, model: UpdateTaskModelType) {
    return instance.put<BaseResponse<{item: Task}>, AxiosResponse<BaseResponse<{ item: Task }>>>(`todo-lists/${todolistId}/tasks/${tasksId}`, {
      ...model
    })
  },
}

// type

export type TaskType = {
  description: string
  title: string
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todolistId: string
  order: number
  addedDate: string
}

export type UpdateTaskModelType = {
  description: string
  title: string
  status: number
  priority: number
  startDate: string
  deadline: string
}

type getTasksType = {
  error: string | null
  totalCount: number
  items: TaskType[]
}

export type Task = {
  description: string;
  title: string;
  status: TaskStatuses;
  priority: TaskPriority;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};