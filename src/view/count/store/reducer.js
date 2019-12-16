import ActionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultValue = fromJS({
  count: 0,
  imgList: []
})

const Count = (state = defaultValue, action) => {
  switch (action.type) {
    case ActionTypes.DECRENMENT:
      return state.set('count', state.get('count') - 1)
    case ActionTypes.INCRENMENT:
      return state.set('count', state.get('count') + 1)
      case ActionTypes.GET_IMG_RANDOM:
      return state.set('imgList', action.data)
    default:
      return state
  }
}
export default Count