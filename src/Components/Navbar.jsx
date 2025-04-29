import { Link, NavLink } from 'react-router';
import './Navbar.css'
import { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
// import { AuthContext } from '../Contexts/AuthContext';
const Navbar = () => { 

  const {user,signOutUser} = use(AuthContext);
  console.log((user));
  // const userInfo = use(AuthContext);
  // console.log('nav',userInfo);
const handleSignOut =()=>{
signOutUser()
.then(()=>{
  console.log('signout succesfully');
})
.catch(Error=>{
  console.log(Error);
})

}
    const links =<>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/login">Login</NavLink></li>
     <li><NavLink to="/register">Register</NavLink></li>
     <li><NavLink to="/dashboard">Dashboard</NavLink></li>

  {
    user && <>
         <li><NavLink to="/orders">Orders</NavLink></li>
         <li><NavLink to="/profile">Profile</NavLink></li>

    </>
  }

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
{
  user ?
<>
<span>{user.email}</span>
<a onClick={handleSignOut} className="btn" >Sign Out</a>
</>:
<Link to="/login">Login</Link>

}
</div>
</div>
    );
};

export default Navbar;