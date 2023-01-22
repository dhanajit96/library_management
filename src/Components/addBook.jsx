import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminNavbar from "./adminNavbar";

let AddBook = ()=> {
  let [title , setTitle]=useState("");
  let [author , setAuthor]=useState("");
  let [edition , setEdition]=useState("");
  let [price , setPrice]=useState("");
  let navigate = useNavigate()

  let data ={title,author,edition,price}

  let handleSubmit =(e)=>{
    e.preventDefault();

    fetch('http://localhost:4000/books',{

      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    alert("book is added")
    navigate('/admin-portal/book-list')
  }


  return (
    <div>
      <AdminNavbar/>
      <h1>Add a book</h1>
    
      {/* <div className="books">
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" >Title of Book:</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <br />
      <label htmlFor="" >Author:</label>
      <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      <br />
      <label htmlFor="" >Edition:</label>
      <input type="text" value={edition} onChange={(e)=>setEdition(e.target.value)} />
      <br />
      <label htmlFor="" >Price:</label>
      <input type="type"  value={price} onChange={(e)=>setPrice(e.target.value)} />
      <button>Submit</button>
      </form>
      </div> */}
        <form className="my-auto" onSubmit={handleSubmit}>
        
        <div className="mb-3 mx-auto">
          <label for="exampleInputEmail1" className="form-label">Title of Book :</label>
          <input type="text" className="mx-auto form-control w-25 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Book Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="mb-3 mx-auto">
          <label for="exampleInputPassword1" className="form-label">Author : </label>
          <input type="text" className=" mx-auto form-control w-25  " id="exampleInputPassword1" placeholder='Enter Author Name' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <div className="mb-3 mx-auto">
          <label for="exampleInputPassword1" className="form-label">Edition :</label>
          <input type="text" className=" mx-auto form-control w-25  " id="exampleInputPassword1" placeholder='Enter Endition' value={edition} onChange={(e)=>setEdition(e.target.value)} />
        </div>
        <div className="mb-3 mx-auto">
          <label for="exampleInputPassword1" className="form-label">Price :</label>
          <input type="number" className=" mx-auto form-control w-25  " id="exampleInputPassword1" placeholder='Enter Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form> 

    </div>
  )
}
export default AddBook;