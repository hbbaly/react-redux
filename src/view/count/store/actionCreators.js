import axios from 'axios'
import ActionTypes from './actionTypes'

const decrenment = (data) => ({type:ActionTypes.DECRENMENT, data})

const increnment = (data) => ({type:ActionTypes.INCRENMENT, data})
const getImgList = (data) => ({type:ActionTypes.GET_IMG_RANDOM, data})
const getImgRandom = () => {
  return async dispatch => {
    let res = await axios.get('https://www.mxnzp.com/api/image/girl/list/random ')
    dispatch(getImgList(res.data.data))
  }
}
export default {
  decrenment,
  increnment,
  getImgRandom
}