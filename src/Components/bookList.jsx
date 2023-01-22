import { useState, useEffect } from "react"
import {useLocation} from 'react-router-dom'
import UserNavbar from "./userNavbar"
import AdminNavbar from "./adminNavbar"

const BookList = () => {
  let [books, setBooks] = useState([])
  let path = useLocation();

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:4000/books')
      let data = await response.json()
      setBooks(data)
    }
    fetchData()
  })
   function handleDelete(id){
     fetch(`http://localhost:4000/books/${id}`, {
       method : 'DELETE'
    })
    }
  return (
    <div className="BookList">
      {path.pathname == '/admin-portal/book-list' && <AdminNavbar/> }
      
      <h1>Available Books : {books.length}</h1>
      {books.map((data) => (
  
  <div className="d-inline-block p-2 float-flex">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title:{data.title}</h5>
        <p className="card-text">Author:{data.author}</p>
        <p className="card-text">Price:{data.price}$</p>
        { path.pathname == '/admin-portal/book-list' && <a href="#" className="btn btn-primary" onClick={()=>handleDelete(data.id)}>Delete</a>}
      </div>
    </div>
  </div>
 
        
        // <div className="books">
        //   <h1>Title:{data.title}</h1>
        //   <h4>Author:{data.author}</h4>
        //   <p>Price:{data.price}$</p>
        //   {path.pathname == '/admin-portal/book-list' && <button onClick={()=>handleDelete(data.id)}>Delete</button> } 
        // </div>
      ))}
    </div>
  );
      
}
export default BookList;
//msubhash138@gmail.com