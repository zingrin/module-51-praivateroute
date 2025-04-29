import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
// import { auth } from '../firebase.init';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => { 
  const {createUser} = use(AuthContext);
    const handleRegister =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);
        // create user
// createUserWithEmailAndPassword(auth ,email,password)
// .then(result=>{
//   console.log(result.user);
// })
// .catch(error=>{
//   console.log(error);
// })
createUser(email,password)
.then(result=>{
  console.log(result);
})
.catch(Error=>{
  console.log(Error);
})

      }

    return (
        <div className="card bg-base-100 mx-auto w-full mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h3 className="text-3xl text-center font-bold">Register Now!</h3>

        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input type="name" name='name' className="input" placeholder="Name" />
          
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Already have an account?Please<Link to="/login" className='text-blue-600 underline'>Login</Link></p>
      </div>
    </div>
    );
};

export default Register;