import { applyMiddleware, combineReducers, legacy_createStore, UnknownAction } from "redux"
import { appReducer } from "./app-reducer"
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk"

const rootReducer = combineReducers({
  // tasks: tasksReducer,
  // todolists: todolistsReducer,
  app: appReducer,
})

// Добавим type Middleware 
// export const store = legacy_createStore(rootReducer)
export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, UnknownAction>

// Из-за типизации мы не можем сделать dispath thunks
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>

// @ts-ignore
window.store = store