import React from 'react'
import BookList from './bookList';
import UserNavbar from './userNavbar';
import { Routes, Route } from 'react-router-dom';
import UserHome from './userHome';

function UserPortal() {
  return (
    <div className='userPortal'>
      <UserNavbar/>
      <Routes>
        <Route path="/" elements={<UserHome/>} />
        <Route path="/book-list" element={<BookList/>} />
      </Routes>
    </div>
  )
}
export default UserPortal;
