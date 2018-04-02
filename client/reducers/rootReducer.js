import { combineReducers } from 'redux'
import { ListReducer } from './ListReducer'
import { ToDoReducer } from './ToDoReducer'

export const rootReducer = combineReducers({ ListReducer, ToDoReducer })
