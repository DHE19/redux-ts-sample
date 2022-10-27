interface IArticle{
    id: number,
    title: string,
    body: string
}



type ArticleState = {
    articles: IArticle[]
}


type ArticleAction = {
    type:string,
    article: IArticle
}


type DispatchType = (arg:ArticleAction) => ArticleAction;


// Here , we start by declaring the inrerface IArticle which reflects the shape of a given article

/*We have  ArticleState, ArticleAciton, and DispatchType that will serve as types for, respectively, the state
* object, the actions creators, and the dispatch function provided by Redux
*/