import React from 'react';
import {Provider} from 'react-redux'
import store from './store/index'
import {GlobalStyle} from './reset.js';
import Count from './view/count/index'
import Todo from './view/todo/index'
class App extends React.Component{
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <GlobalStyle />
          <Count />
          <Todo />
        </div>
      </Provider>
    )
  }
}

export default App;
