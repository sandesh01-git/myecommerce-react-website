import React from 'react'
import {Link} from "react-router-dom";
import logo from "../Components/Assets/images/cooltext408825710397024.png"
import "../Components/blog.css"

const Navbar = () => {
  return (
    <>
<nav className="mynav navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> <img src={ logo } alt=''/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
    
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop Now
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Vegei">Vegetables and Fruits</Link></li>
            <li><Link className="dropdown-item" to="/">Meats and Fish</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Eggs</Link></li>
            <li><Link className="dropdown-item" to="/">Diary Products</Link></li>
          </ul>
        </li>

         <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="all category" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/">Carts</Link></li>
            <li><hr className="dropdown-divider"/></li>
          
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar