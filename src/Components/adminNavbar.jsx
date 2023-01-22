import React from 'react'
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary bg-opacity-10">
      <Link className="btn btn-outline-primary my-2 mx-2 my-sm-0" to='/admin-portal/'>Home</Link>
      <Link className="btn btn-outline-info my-2 mx-2 my-sm-0" to='/admin-portal/book-list'>Book List</Link>
      <Link className="btn btn-outline-warning my-2 mx-2 my-sm-0" to='/admin-portal/user-list'>User List</Link>
      <Link className="btn btn-outline-success my-2 mx-2 my-sm-0" to='/admin-portal/add-book'>Add Book</Link>
      <Link  className="btn btn-outline-secondary my-2 mx-2 my-sm-0" to='/admin-portal/add-user'>Add User</Link>
      <Link className="btn btn-outline-dark my-2 mx-2 my-sm-0" to='/'>Logout</Link>
    </nav>
  )
}
export default AdminNavbar;