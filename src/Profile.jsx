import React, { use } from 'react';
import { AuthContext } from './Contexts/AuthContext';

const Profile = () => {
    const{user} = use(AuthContext);
    return (
        <div className='max-w-sm mx-auto mt-10'>
            <p>{user.email}</p>
            <div
  className="hero mx-auto h-[11/12]"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;