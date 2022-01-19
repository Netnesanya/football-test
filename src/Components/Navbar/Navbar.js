import { NavLink } from 'react-router-dom';
import n from'./Navbar.module.css';
import './Active.css'
import React  from 'react';

const Navbar = () => {
   return (
   <nav className = {n.nav}>
    <span className ={n.navbar_item } class="navlink">
      <NavLink to= "/competitions" >Competitions</NavLink>
    </span>
    <span className ={n.navbar_item} class="navlink" >
      <NavLink to= "/teams" >Teams</NavLink>
    </span>
       <span className={n.navbar_item} class="navlink">
           <NavLink to="/areas">Areas</NavLink>
       </span>
    <span className ={n.navbar_item} class="navlink">
      <NavLink to= "/players">Players</NavLink>
    </span>
    {/*<div className ={n.navbar_item} class ='navlink'>*/}
    {/*  <NavLink to= "/music">Music</NavLink>*/}
    {/*</div>*/}
    {/*<div className ={n.navbar_item} class ='navlink'>*/}
    {/*  <NavLink to= "/settings">Settings</NavLink>*/}
    {/*</div>*/}
    {/* <div className ={n.navbar_item}>
      <a >Profile</a> 
    </div>*/}
  </nav>)
};

export default Navbar;