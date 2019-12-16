import actionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultValue = fromJS({
  todoList: [],
  inputValue: ''
})
const Todo = (state = defaultValue, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.set('todoList', state.get('todoList').push(state.get('inputValue')))
    case actionTypes.DEL_TODO:
      return state.get('todoList').delete(action.data)
    case actionTypes.GET_INPUT:
      return state.set('inputValue', action.data)
    default:
      return state
  }
}
export default Todo