import React from "react";
import { Nav, NavLink,  NavLink2, NavMenu } 
    from "./Nav_elements";
import Avatar from "../avatar";
  
const Navbar = ({islogin}) => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/homepage" activeStyle>
            Home Page 
          </NavLink>
          <NavLink to="/audiobook" activeStyle>
            Audio Book
          </NavLink>
          <NavLink to="/videobook" activeStyle>
            Video Book
          </NavLink>
          <NavLink to="/liveroom" activeStyle>
            Live Rooms
          </NavLink>
        </NavMenu>
        {islogin.login?<NavLink2 to="/sign-up" activeStyle>sign Up/in</NavLink2>:<NavLink to='/profile'><Avatar img='src\assets\index1.jpeg'/></NavLink>}
      </Nav>
    </>
  );
};
  
export default Navbar;