import { combineReducers } from 'redux-immutable'
import Count from '../view/count/store/reducer'
import Todo from '../view/todo/store/reducer'
export default combineReducers({
  Count,
  Todo
})