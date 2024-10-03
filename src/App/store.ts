import { configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { todolistsReducer } from '../features/Todolist/model/todolists-reducer'
import { tasksReducer } from '../features/Task/model/tasks-reducer'
import { appReducer } from './app-reducer'
import { useDispatch } from 'react-redux'
import {AnyAction} from 'redux'


export const store = configureStore({
  // middleware можно не писать, уже под капотом
  reducer: {
    todolists: todolistsReducer,
    tasks: tasksReducer,
    app: appReducer,
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();