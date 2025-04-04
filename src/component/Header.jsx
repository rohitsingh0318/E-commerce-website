import React from 'react'
import { Link } from 'react-router-dom';  

const Header = ({ cartCount }) => {
  
  return (
    <section className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-Commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to={'/E-commerce-website/'} aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/E-commerce-website/cart/'} >
           Cards <span  className="badge text-bg-danger">{cartCount}</span>
        </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   
    </section>
  )
}

export default Header