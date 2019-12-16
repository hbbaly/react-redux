import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from './store'
import { Wrapper, List, Add } from './style'
class Todo extends Component {
  render () {
    return (
      <div>
      <Wrapper>
        <input type='text' placeholder='请输入内容'
          onChange={this.props.getInput} />
        <Add onClick={this.props.addTodo}>添加</Add>
      </Wrapper>
      {
        this.props.todoList.map((item, index) => (
          <List key={item.id}>{index+1}:{item}</List>
        ))
      }
      </div>
      
    )
  }
}
const mapStateToProps = (state) => ({
  todoList: state.get('Todo').get('todoList'),
  inputValue: state.get('Todo').get('inputValue')
})
const mapDispatchToProps = (dispatch) => ({
  addTodo (e) {
    dispatch(store.creators.addTodo())
  },
  delTodo (data) {
    dispatch(store.creators.addTodo(data))
  },
  getInput (e) {
    if (!e.target.value) return
    dispatch(store.creators.getInput(e.target.value))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo)