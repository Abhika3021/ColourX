import React from 'react'

const Scard = ({ title, image }) => {
  return (
    <div className="card ">
      <div className='text-center'>
      <img style={{height:'30vh'}} src={image}/>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Scard;