import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Store, applyMiddleware, createStore} from 'redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'

const store:Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

/*As you can see, we import the reducer function and then pass it as an argument to the method createStore (that's deprecated)
*in order to create a new Redux store. The redux-thunk middleware needs to be proceeded as a second parameer as well
* to the method to be able to handle asynchronous code */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
