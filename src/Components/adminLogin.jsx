import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AdminLogin() {

  let navigate = useNavigate()
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('')

  const handleSubmit = () => {
    if ((email == 'admin@gmail.com') && (password == 1234)) {
      navigate('/admin-portal');
    }
    else {
      alert('invalid credentials')
    }
  }

  return (
    <div className="" >
      <form className="my-auto" onSubmit={handleSubmit}>
        <h4>Admin Login</h4>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="mx-auto form-control w-25 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email-id' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3 ">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className=" mx-auto form-control w-25  " id="exampleInputPassword1" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default AdminLogin;