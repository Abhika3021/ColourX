import React from 'react'
import OfferContainer from './Home/OfferContainer';
import Brand from './Home/Brand';
import HomeAbout from './Home/HomeAbout';
import Visible from './Home/Visible';
import ServiceButton from './Home/ServiceButton';
import Mission from './Home/Mission';
const Home = () => {
    return (
        <section>
            <Visible />
            <div className='offer-container'>
                <div className='offer'>
                    <h2>We offer</h2>
                    <OfferContainer />
                </div>
            </div>
            <div className='about-container'>
                <div className='about'>
                    <h2>About <span>ColourX</span></h2>
                    <HomeAbout />
                </div>
            </div>
            <div className='brand-container'>
                <Brand />
            </div>
            {/* <div className='benefits'>
                    <CarouselSlideshow />
                    <p>Despite the rise of digital advertising and online media, outdoor branding through flex and hoardings continues to offer unique advantages in terms of visibility, brand reinforcement, and local targeting, making it an important component of comprehensive marketing strategies in today's world.
                    </p>
                </div> */}
            <div className='service-container'>
                <ServiceButton />
            </div>
            <div className='mission-container'>
                <Mission />
            </div>
        </section >
    )
}

export default Home;