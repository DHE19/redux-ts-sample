import * as React from 'react';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
    article: IArticle;
    removeArticle: (article: IArticle) => void
}



const Article:React.FC<Props> = ({article,removeArticle}) => {
    const dispatch:Dispatch<any> = useDispatch();

    const deleteArticle = React.useCallback((article:IArticle) => dispatch(removeArticle(article)),[dispatch,removeArticle]);

    return (
        <div className='Article'>
            <div>
                <h1>{article.title}</h1>
                <h1>{article.body}</h1>
            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
            
        </div>
    )
}

/*The Article component shows an article object. 
*
* The function removeArticle has to dispatch to acces the store and hence delete a given article
* That's the reason we use the 'useDispatch' hook here, which lets Redux complete the removing action.
*
* THe use of useCallback helps avoid unnecessary re-rendering by memoizing values as dependecies.
*/

export default Article

