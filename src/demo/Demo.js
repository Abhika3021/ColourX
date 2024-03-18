import React from 'react'
import { OFFER } from '../Components/Constant'
import Card from '../Components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '../../rea';
const Demo = () => {
  return (
    <div className="container">
      <div className='row'>
        {OFFER.map((card, index) => (
          <div className='col-md-4 col-sm-6'>
            <Card key={index} title={card.title} description={card.description} image={card.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Demo