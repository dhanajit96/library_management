import React from 'react'
import { Link } from 'react-router-dom';

const UserNavbar=()=> {
  return (
    <div className='userNavBar'>
      <h1>Welcome To Library</h1>
        <Link className="btn btn-outline-primary my-2 mx-2 my-sm-0" to="/user-portal/">Home</Link>
        <Link className="btn btn-outline-primary my-2 mx-2 my-sm-0" to="/user-portal/book-list">Book List</Link>
        <Link className="btn btn-outline-primary my-2 mx-2 my-sm-0" to="/">Logout</Link>
    </div>
  )
}

export default UserNavbar;
