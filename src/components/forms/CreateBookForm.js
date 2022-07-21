import {useState} from 'react'
import axios from 'axios'

const CreateBook =(props)=> {
    const [formData, setFormData] = useState({
        created_by: '',
        created_at: '',
        book_title: '',
        book_content: '',
    })

    const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post('https://aas-book-app.herokuapp.com/books', formData,{
    headers:  {
        'x-auth-token': localStorage.getItem('userToken')
    } 
    }).then(res => props.setBooks([...props.books, res.data]))
    }
    return(
        <form onSubmit={handleSubmit}>

           <div className="mb-3">
           <label className="form-label" htmlFor="created_by">Created_by</label>
            <input className="form-control" type="text" id="created_by" name="created_by" value={formData.created_by} onChange={(e)=> setFormData({...formData, [e.target.id]: e.target.value})} />
           </div>

           <div className="mb-3">
           <label className="form-label" htmlFor="created_at">Created_at</label>
            <input className="form-control" type="text" id="created_at" name="created_at" value={formData.created_at} onChange={(e)=> setFormData({...formData, [e.target.id]: e.target.value})}/>
           </div>

           <div className="mb-3">
           <label className="form-label"htmlFor="book_title">Title</label>
            <input className="form-control" type="text" id="book_title" name="book_title" value={formData.title} onChange={(e)=> setFormData({...formData, [e.target.id]: e.target.value})}/>
           </div>

            <div className="mb-3">
            <label className="form-label" htmlFor="book_content">Content</label>
            <input className="form-control" type="text" id="book_content" name="book_content" value={formData.content} onChange={(e)=> setFormData({...formData, [e.target.id]: e.target.value})}/>
            </div>
         

            <input type='submit' className="btn btn-success"/>

            
        </form>
    )
}
export default CreateBook