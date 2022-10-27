import * as React from 'react';

// props's structure
type Props = {
    saveArticle: (article:IArticle | any) => void;
}

// crea a new component
const AddArticle:React.FC<Props> = ({saveArticle}) => {
    // using a useState hook
    const [article, setArticle] = React.useState<IArticle | {}>();
    // handle the thata to set to the state
    const handleArticleData = (e:React.FormEvent<HTMLInputElement>) =>{
        // set the new Article
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const addNewArticle = (e: React.FormEvent) =>{
        e.preventDefault();
        saveArticle(article);
    }

    const styleInput = {marginInline:'15px', padding:'13.5px 20px', borderRadius:'5px', outline:'none', border:'none'}

    return (
        <form onSubmit={addNewArticle} className='Add-article'>
            
            <input  style={styleInput}
            type="text" id='title' 
            placeholder='Title' 
            onChange={handleArticleData} />
            
            <input  style={styleInput}
            type="text"
            id='body'
            placeholder='Description'
            onChange={handleArticleData} />

            <button disabled={article === undefined ? true :false}>
                Add Article
            </button>
        </form>
    )
}

export default AddArticle

/*To add a new article, we will be using this form component. It receives the function 'saveArticle'
* as a parameter, which allows adding a new article to the store.
*/

