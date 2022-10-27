import { Dispatch, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addArticle, removeArticle } from './store/actionCreators'
import AddArticle from './components/AddArticle'
import Article from './components/Article'

const App: React.FC =( ) => {
  
  const articles: readonly IArticle[] = useSelector((state:ArticleState) => state.articles, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback((article:IArticle) => dispatch(addArticle(article)),[dispatch]);


  return (
    <div className="App">
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle}/>
      {articles.map((article:IArticle) =>(
        <Article
        key={article.id}
        article={article}
        removeArticle={removeArticle}
        />
      ))}
    </div>
  )
}

export default App


/*The useSelector hook enables acces to the state of he store. Here, we pass shalowEqual as a second argumentto the method
*to tell to Redux to use shallow equality when checking for changes.
*
*Next, we rely on 'useDispatch' to dispatch an action of adding articles in the store. Finally, we loop through the array of articles
*and pass each to the 'Article' component to show it
*
**/