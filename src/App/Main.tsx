import React from 'react'
import { View } from 'react-native'
import { Todolists } from '../features/Todolist/ui/Todolists'
import { useSelector } from 'react-redux'
import { AppRootStateType } from './store'
import { RequestStatusType } from './app-reducer'

export function Main({ demo = false }: PropsType) {
  const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Todolists demo={demo}/>
      </View>
    </View>

  )
}

type PropsType = {
  demo?: boolean
}