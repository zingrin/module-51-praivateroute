import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        
    <div className="card bg-base-100 mx-auto w-full mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h3 className="text-3xl text-center font-bold">Login now!</h3>

        <form >
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New to this site?Please<Link to="/register" className='text-blue-600 underline'>Register</Link></p>
      </div>
    </div>
  
    );
};

export default Login;