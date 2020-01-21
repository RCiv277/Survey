import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/survey/create'>CREATE A SURVEY</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span >WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/survey/index/user'>YOUR SURVEYS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/survey/index'>All SURVEYS</Link>

    </div>
    :
    <div>
      <Link to='/login'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;