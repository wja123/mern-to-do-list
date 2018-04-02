import { combineReducers } from 'redux'
import { ListState } from './ListState'
import { ToDoState } from './ToDoState'

export const rootReducer = combineReducers({ ListState, ToDoState })
