import { SearchOutlined, ShoppingCartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

const Navbar = () => {
    return ( 
      <div className="navbar-container container mt-3 mb-3">
          <div className="navbar-caption">
               <a  href="#">گیشا مگ </a>
               <a  href="#">پیگیری سفارش </a>
          </div>
          <div className="navbar-logo">
              <img src="Gisha-Logotype-200.png" width="150" height="40" />
          </div>
          <div className="navbar-icons">
                <SearchOutlined style={{fontSize:20}} className="p-1 nav-icon" />
                <ShoppingCartOutlined style={{fontSize:20}} className="p-1 nav-icon" />
                <UserOutlined style={{fontSize:20}} className="p-1 nav-icon" />
                <UnorderedListOutlined style={{fontSize:20}} className="p-1 nav-icon" />
          </div>
      </div>
     );
}
 
export default Navbar;









      //   <nav className="navbar navbar-expand-lg navbar-light  container mt-3">
     
      
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
      //     <li className="nav-item active">
      //         <a  href="#">گیشا مگ </a>
      //       </li>
      //       <li className="nav-item active">
      //         <a  href="#">پیگیری سفارش </a>
      //       </li>
      //       <li className="nav-item ">
      //         <img src="Gisha-Logotype-200.png" width="150" height="40" />
      //       </li>
     
      //     </ul> 


          
      //     <form className="form-inline my-2 my-lg-0">
      //     <SearchOutlined style={{fontSize:20}} className="p-1 nav-icon" />
      //     <ShoppingCartOutlined style={{fontSize:20}} className="p-1 nav-icon" />
      //     <UserOutlined style={{fontSize:20}} className="p-1 nav-icon" />
      //     <UnorderedListOutlined style={{fontSize:20}} className="p-1 nav-icon" />
      //     </form>
      //   </div>
      // </nav>