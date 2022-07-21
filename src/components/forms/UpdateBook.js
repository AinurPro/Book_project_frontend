import {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

const UpdateBook = (props)=> {
    const [book, setBook]=useState(null)
    const{id} = useParams()
    const history = useHistory()

    useEffect(()=> {
        axios
        .get(`https://aas-book-app.herokuapp.com/books/${id}`, {
            headers: {
                "x-auth-token": localStorage.getItem('userToken')
            },
        })
        .then((res)=> {
            console.log(res.data)
            setBook(res.data)
        })
        .catch((err)=> console.error(err))
    }, [id]);

    const handleSubmit =(e)=> {
        e.preventDefault();
        axios.put(`https://aas-book-app.herokuapp.com/books/${id}`, book, {
            headers: {
                'x-auth-token': localStorage.getItem('userToken')
            }
        }).then(res => history.push('/home'))
    };
    return(
        <div>
            {book && (
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                    <label className="form-label" htmlFor="created_by">Created_by</label>
                    <input className="form-control" type="text" name="created_by" id="created_by" value={book.created_by} onChange={(e) => setBook({...book, [e.target.id]: e.target.value})}/>

                    </div>
                    
                    <div className='mb-3'>
                    <label className="form-label" htmlFor="created_at">Created_at</label>
                    <input className="form-control" type="text" name="created_at" id="created_at" value={book.created_at} onChange={(e) => setBook({...book, [e.target.id]: e.target.value})}/>
                    </div>

                    <div className='mb-3'>
                    <label className="form-label" htmlFor="book_title">Book Title</label>
                    <input className="form-control" type="text" name="book_title" id="book_title" value={book.book_title} onChange={(e) => setBook({...book, [e.target.id]: e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                    <label className="form-label" htmlFor="book_content">Book Content</label>
                    <input className="form-control" type="text" name="book_content" id="book_content" value={book.book_content} onChange={(e) => setBook({...book, [e.target.id]: e.target.value})}/>
                    </div>
                    


                    <input type="submit" className="btn btn-info" value="Update Book" />
                </form>
            )}
        </div>
    )
}
export default UpdateBook