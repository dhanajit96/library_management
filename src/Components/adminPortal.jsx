import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminNavbar from './adminNavbar'

import AddBook from './addBook'
import AddUser from './addUser'
import BookList from './bookList'
import UserList from './userList'


const AdminPortal = ()=>
 {
  return (
    <div >
        <h1>Welcome to Admin Portal</h1>
       <Routes>
          <Route path='/' element={<AdminNavbar />} />
          <Route path='/book-list' element={<BookList />} />
          <Route path='/user-list' element={<UserList />} />
          <Route path='/add-book' element={<AddBook />} /> 
          <Route path='/add-user' element={<AddUser />} />
        </Routes> 
    </div>

  )
}
export default AdminPortal;
//home, booklist , userlist, add books , add user , logout