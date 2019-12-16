import React, { Component} from 'react';
import {connect} from 'react-redux'
import { Wrapper, ButtonWrapper, Img, ImgWrapper } from './style'
import store from './store/index'
class Count extends Component {
  render () {
    return (
      <Wrapper>
        <h2>{this.props.count}times</h2>
        <ButtonWrapper onClick={this.props.decrenment}>-</ButtonWrapper>
        <ButtonWrapper onClick={this.props.increnment}>+</ButtonWrapper>
        <Wrapper>
          <Wrapper>获取图片</Wrapper>
          <ButtonWrapper onClick={this.props.getImgRandom}>获取</ButtonWrapper>
          <ImgWrapper>
            {this.props.imgList.map(item=>(
              <Img src={item.imageUrl} key={item.id}/>
            ))}
          </ImgWrapper>
        </Wrapper>
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    count: state.get('Count').get('count'),
    imgList: state.get('Count').get('imgList')
  })
}
const mapDispatchToProps = (dispatch) => ({
  decrenment(){
    dispatch(store.creators.decrenment())
  },
  increnment(){
    dispatch(store.creators.increnment())
  },
  getImgRandom () {
    dispatch(store.creators.getImgRandom())
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Count)