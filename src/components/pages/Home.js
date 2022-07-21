import NavBar from '../layout/NavBar'
import CreateBook from '../forms/CreateBookForm'

import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Home =(props)=> {
    const [books, setBooks] = useState(null)
    const history = useHistory()
    useEffect(()=> {
axios.get('http://localhost:5500/books', {
    headers:  {
        'x-auth-token': localStorage.getItem('userToken')
    } 
}).then(res=> setBooks(res.data)).catch(err => console.error(err))
    }, [])

    const handleDelete = (book) => {
        axios.delete(`http://localhost:5500/books/${book._id}`, {
headers: {
    "x-auth-token": localStorage.getItem("userToken"),
},
        }).then(res => setBooks([...books.filter(t => t._id !== book._id)])).catch(err => console.error(err))
    };

    const handleUpdate = (book)=> {
        history.push(`/update/${book._id}`)
    }
    return(
       <div>
           <NavBar user={props.user} />
            <h1>Home Page</h1>

            <CreateBook setBooks={setBooks} books={books}/>

            {books && books.map(book => (
                <div key={book._id}>
                    <h6>{book.created_by}</h6>
                    <h6>{book.created_at}</h6>
                    <h6>{book.book_title}</h6>
                    <h6>{book.book_content} {book.created_by === props.user.username && <span className="btn btn-danger" onClick={()=> handleDelete(book)}>X</span>
                }
                 <span className="btn btn-success" onClick={()=> handleUpdate(book)}>Update</span>
                </h6>
                     
                     
                    
                   </div> 
            ))}
       </div>
    )
}
export default Home;