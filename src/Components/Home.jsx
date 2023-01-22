import React from 'react'
import { Link } from 'react-router-dom';
import Lib from './4907599.jpg'

function Home() {
   const myStyle= {
    height : "300px",
     filter: "blur(5px)"
   }
  
  return (
    <div>
        <div className="card text-bg-dark">
  <img src={Lib} className="img-fluid" style= {myStyle} alt="..." />
  <div className="card-img-overlay ">
    <div className="card-body">
    <h1 className="card-title text-xl-center" >Library Management System</h1>   
    </div> 
  </div>
</div>

        <div className="row  mx-4 my-4">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body bg-info">
        <h5 className="card-title">Admin Login</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to='/admin-login' className="btn btn-light">Admin Login</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body bg-warning">
        <h5 className="card-title">User Login</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to='/user-login' className="btn btn-light">User Login</Link>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
export default Home;