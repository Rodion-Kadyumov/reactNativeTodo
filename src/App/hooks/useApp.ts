import { useState } from 'react'
import { createTheme } from '@mui/material/styles'
import { TaskType } from '../../features/Todolist/api/todolistApi'

export type FilterValueType = 'all' | 'active' | 'complited'

export type TasksStateType = {
  [key: string]: TaskType[]
}

export const useApp = () => {
  const [themeMode, setThemeMode] = useState('light') // Светлая и темная темы

  const theme = createTheme({
    // Позволяет создавать глобальные стили
    palette: {
      mode: themeMode === 'light' ? 'light' : 'dark',
      primary: {
        main: '#087EA4',
      },
    },
  })

  const changeModeHandler = () => {
    // Светлая и темная темы
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  return {
    theme,
    changeModeHandler,
  }
}
