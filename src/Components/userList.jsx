import React from 'react'
import { useState, useEffect } from 'react'
import AdminNavbar from "./adminNavbar"


const UserList =()=> {
  let [users, setUsers] = useState([]);
  
 // useEffect =( ()=>{
    let fetchData= async()=>{
      let response = await fetch('http://localhost:4000/users');
      let data = await response.json();
      setUsers(data);
    }
    fetchData();
   // })
    function handleDelete(id){
      fetch(`http://localhost:4000/users/${id}`, {
        method : 'DELETE'
     })
     }

     
  return (
    <div>
      <AdminNavbar/>
      <h1>show user list</h1>
      <h4>Available Users : {users.length}</h4>
      {users.map((data) =>(
        // <div className="users">
        //   <h2>Name:{data.name}</h2>
        //   <h3>Email id :{data.email}</h3>
        //   <p>Mobile number: {data.contact}</p>
        //   <button onClick={()=>handleDelete(data.id)}>Delete</button> 
        // </div>
        
        <div className="d-inline-block p-2 float-flex">
    <div className="card">
      <div className="card-body" >
        <h5 className="card-title">Name:{data.name}</h5>
        <p className="card-text">Email id :{data.email}</p>
        <p className="card-text">Mobile number: {data.contact}</p>
         <a href="#" className="btn btn-primary" onClick={()=> handleDelete(data.id)}>Delete</a>
        </div>
    </div>
  </div>
         
      ))}
    </div>
  )
}
export default UserList;