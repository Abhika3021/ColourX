import React from 'react'

const Card = ({ title, description, image }) => {
  return (
    <div className="card ">
      <div className='text-center'>
      {image}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
