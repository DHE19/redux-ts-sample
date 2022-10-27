import * as actionTypes from './actionTypes';


// set new article
export function addArticle(article: IArticle){
    //define the action
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article
    }
    
    return simulateHttpRequest(action)

}


// remove an article
export function removeArticle(article: IArticle){
    // set the action
    const action:ArticleAction = {
        type:actionTypes.REMOVE_ARTICLE,
        article
    }

    return simulateHttpRequest(action)
}

// simulate an HTTP Request, So take it time to return the "request"
export function simulateHttpRequest(action: ArticleAction){
    return (dispatch: DispatchType) => {
        setTimeout( () => {
            dispatch(action)
        }, 500);
    }
}


/* we are simulate the HTTP request by delaying it for 0.5 seconds.

*the function addArticle will dispatch an action for adding a new article, and the method removeArticle
* will do the opposite. So delete the object passed in as an argument
*/
