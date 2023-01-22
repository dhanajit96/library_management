
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './adminNavbar';

  const AddUser= ()=> {
  let [name , setName]= useState();
  let [email, setEmail]=useState();
  let [contact, setContact]=useState();
  let navigate = useNavigate();

  let data = { name , email , contact};
  let handleSubmit =(e)=>{
    e.preventDefault();

    fetch('http://localhost:4000/users',{

      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    alert("contact is added")
    navigate('/admin-portal/user-list')
  }
  return (
    <div>
      <AdminNavbar/>
      <h1>Add a User</h1>
      <div className="users">
        {/* <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" >Users Name:</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br />
      <label htmlFor="" >Email Id:</label>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <label htmlFor="" >Contact:</label>
      <input type="type" value={contact} onChange={(e)=>setContact(e.target.value)} />
      <br />
      <button>Submit</button>
      </form> */}

<form className="my-auto" onSubmit={handleSubmit}>
        
        <div className="mb-3 mx-auto">
          <label for="exampleInputEmail1" className="form-label">Users Name:</label>
          <input type="text" className="mx-auto form-control w-25 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Users Name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="mb-3 mx-auto">
          <label for="exampleInputPassword1" className="form-label">Email id:</label>
          <input type="email" className=" mx-auto form-control w-25  " id="exampleInputPassword1" placeholder='Enter Email Id' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-3 mx-auto">
          <label for="exampleInputPassword2" className="form-label">Mobile Number :</label>
          <input type="text" className=" mx-auto form-control w-25  " id="exampleInputPassword2" placeholder='Enter Mobile Number' value={contact} onChange={(e)=>setContact(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> 
      </div>

    </div>
  )
}
export default AddUser;