import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex
`
export const List = styled.div`
  width: 300px
  height: 50px
  line-height: 50px
  font-size: 22px
  color: #666
  text-align: left
`
export const Input = styled.input.attrs({
  type: props => props.type || 'text',
  placeholder: props => props.placeholder || '请输入内容'
})`
  display: flex
  width: 300px
  height: 50px
  line-height: 50px
`
export const Add = styled.div`
  width: 100px
  height: 50px
  line-height: 50px
  text-align: center
  font-size: 24px
  background: #eee
  color: blue
  border-radius: 5px
`