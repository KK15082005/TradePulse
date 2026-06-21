import React , {useState} from 'react';
import {Link} from "react-router-dom";
const Menu =() => {
  const [selectedMenu , setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen , setProfileDropdownOpen] = useState(false) ;

  const handleMenueClick=(index)=>{
    setSelectedMenu(index);
  };

  const handleProfileClick=(link)=>{
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass =  "menu";
  const activeClass = "menu selected"
  return(
    <div className='menu-container'>
      <img src='logo.png' style={{width : "50px"}}/>;
      <div className='menus mt-4'>
        <ul>
          <li>
            <Link style={{textDecoration : "none"}} to ="/" onclick={()=>handleMenueClick(0)}>
              <p className={selectedMenu===0 ? activeClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration : "none"}} to ="/orders" onclick={()=>handleMenueClick(1)}>
              <p className={selectedMenu===1 ? activeClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration : "none"}} to ="/holdings" onclick={()=>handleMenueClick(2)}>
              <p className={selectedMenu===2 ? activeClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration : "none"}} to ="/positions" onclick={()=>handleMenueClick(3)}>
              <p className={selectedMenu===3 ? activeClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration : "none"}} to ="/funds" onclick={()=>handleMenueClick(4)}>
              <p className={selectedMenu===4 ? activeClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration : "none"}} to ="/apps" onclick={()=>handleMenueClick()}>
              <p className={selectedMenu===5 ? activeClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr/>
        <div className='profile' onclick={handleProfileClick}>
          <div className='avatar mb-3'>ZU</div>

          <p className='username'>USERID</p>
        </div>
      </div>
    </div>
  )
}
export default Menu;