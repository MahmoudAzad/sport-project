import React from 'react';

const Navbar = () => {
    return ( 
    
        <nav className="navbar navbar-expand-lg navbar-light  container">
     
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <a className="nav-link" href="#">گیشا مگ  <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">پیگیری سفارش <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item m-auto">
              <img src="Gisha-Logotype-200.png" width="150" height="40" />
            </li>
           
     
          </ul>


          
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
     );
}
 
export default Navbar;