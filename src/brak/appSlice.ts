// import { createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit'

// const slice = createSlice({
//   name: 'app',
//   initialState: {
//     status: 'idle' as RequestStatusType,
//     error: null as string | null, // Это объект, не значение
//     isInitialized: false,
//   },
//   reducers: {
//     SetStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
//       state.status = action.payload.status
//     },
//     SetError(state, action: PayloadAction<{ error: string | null }>) {
//       state.error = action.payload.error
//     },
//     SetInitialized(state, action: PayloadAction<{ isInitialized: boolean }>) {
//       // Тут уже копия стэйта
//       state.isInitialized = action.payload.isInitialized
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//     .addMatcher(isPending, (state) => {
//       state.status = "loading"
//     })
//     // .addMatcher(isPending(addTodolist), (state) => { Усли крутилка нужна для чего-то одного
//     //   state.status = "loading"
//     // })
//     .addMatcher(isFulfilled, (state) => {
//       state.status = "succeeded"
//     })
//     .addMatcher(isRejected, (state) => {
//       state.status = "failed"
//     })
//   }
// })

// export const appReducer = slice.reducer
// export const appActions = slice.actions

// export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
