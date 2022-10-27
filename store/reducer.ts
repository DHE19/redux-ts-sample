import * as actionTypes from './actionTypes'

//initial state
const initialState: ArticleState = {
    articles:[
        {
            id:1,
            title:"Lo increible de programar",
            body: "Un simple articulo que escribimos para mencionar lo increible ques programar."
        },
        {
            id:2,
            title:"Por que usar redux",
            body: "Entendiendo el por que usar redux en nuestros projectos con React y como puede facilitarnos el centralizar los datos"
        },
        {
            id:3,
            title:"No te rindas",
            body: "siempre debes de continuar tu apredizaje, aveces cansa, pero cuando logres superarte te darás cuenta lo lejos que llegaste"
        }
    ]
}

/*Como puedes ver, declaramos un estado inicial para tener algunos articulos para mostrar cuando la pagina carga. 
* el objeto estado necesita emparejar con el tipo "ArticleState"- de otra manera typescript lanzará un error.
*/



const reducer = (state: ArticleState = initialState,action: ArticleAction): ArticleState =>{
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle ={
                id: Math.random(),
                title: action.article.title,
                body: action.article.body,
            }

            return{
                ...state,
                articles: state.articles.concat(newArticle)
            }
            case actionTypes.REMOVE_ARTICLE:
                const updateArticles: IArticle[] = state.articles.filter(
                    a => a.id !== action.article.id
                );

            return{
                ...state,
                articles: updateArticles,
            }
            default:
            return state;
    }

}

export default reducer;


/* Next, we have the reducer funciton that expects the previous state and an action to be able to update the store.
* Here, we have two actions: one of adding and another for deleting.
*/
    