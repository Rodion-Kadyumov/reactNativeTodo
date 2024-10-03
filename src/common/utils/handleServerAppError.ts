import { appActions } from './../../App/app-reducer';
// import { appActions } from './../../App/appSlice';
import { Dispatch } from 'redux'
import { BaseResponse } from '../types'

export const handleServerAppError = <D>(data: BaseResponse<D>, dispatch: Dispatch, isShowGlobalError: boolean = true) => {
  if(isShowGlobalError) {
    dispatch(appActions.SetError({ error: data.messages.length ? data.messages[0] : 'Some error' }))
  }
}