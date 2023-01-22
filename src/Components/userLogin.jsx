import React from 'react'
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/user-portal')
  }
  return (
    <div className="userLogin">
      <h1>User Login</h1>
      {/* <form action="" onSubmit={handleSubmit}>
        <div className="email">
            <label htmlFor="Email">Email:</label>
            <input type="email" placeholder='email-id' />
        </div>
        <div className="passowrd">
            <label htmlFor="Password">Password:</label>
            <input type="password" placeholder='Enter Password' />
        </div>
        <button>Login</button>
      </form> */}
      <form className="my-auto" onSubmit={handleSubmit}>
        <h4>User Login</h4>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="mx-auto form-control w-25 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email-id' />
        </div>
        <div className="mb-3 ">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className=" mx-auto form-control w-25  " id="exampleInputPassword1" placeholder='Enter Password' />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default UserLogin;

// home , booklist