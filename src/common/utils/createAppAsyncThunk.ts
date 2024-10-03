import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppRootStateType } from '../../App/store'
import { BaseResponse } from '../types'
import { UseDispatch } from 'react-redux';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootStateType
  dispatch: UseDispatch
  rejectValue: null | BaseResponse
}>()
