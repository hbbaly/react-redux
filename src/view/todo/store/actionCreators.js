import actionTypes from './actionTypes'
const addTodo = (data) => ({type: actionTypes.ADD_TODO, data})
const delTodo = (data) => ({type: actionTypes.DEL_TODO, data})
const getInput = (data) => ({type: actionTypes.GET_INPUT, data})
export default {
  addTodo,
  delTodo,
  getInput
}