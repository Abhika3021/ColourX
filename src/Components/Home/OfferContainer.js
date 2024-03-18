import React from 'react';
import Card from '../Card';
import { OFFER } from '../Constant';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const OfferContainer = () => {
  return (
    <div className="container">
      <div className='offer-laptop'>
        <div className='row cover'>
          {OFFER.map((card, index) => (
            <div className='col-md-4 col-sm-6' key={index}>
              <Card title={card.title} description={card.description} image={card.image} />
            </div>
          ))}
        </div>
      </div>
      {/* Add a horizontal scrolling container for mobile view */}
      <div className="offer-mobile">
        <div
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            display: 'flex',
          }}
        >
          {OFFER.map((card, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 80%', // Set card width to 50%
                margin: '0 5px', // Add some spacing between cards
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center the text vertically
              }}
            >
              <Card title={card.title} description={card.description} image={card.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferContainer;
