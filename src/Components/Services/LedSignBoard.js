import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EngineeringIcon from '@mui/icons-material/Engineering';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdateIcon from '@mui/icons-material/Update';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TuneIcon from '@mui/icons-material/Tune';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import Img1 from '../../images/services/led/1.jpg'
import Img2 from '../../images/services/led/2.jpg'
import Img3 from '../../images/services/led/3.png'
const LedSignBoard = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `These are illuminated displays used in the flex printing and hoarding business. These signs incorporate Light Emitting Diodes (LEDs) to create bright, energy-efficient visuals. They serve as dynamic marketing tools, showcasing advertisements, messages, or branding with eye-catching effects. LED signboards offer versatility, allowing for dynamic content changes and easy customization. They are typically mounted on hoardings or in indoor/outdoor settings. In the flex printing and hoarding industry, LED signboards play a pivotal role in capturing attention, conveying information, and enhancing visibility for businesses. Their durability, low maintenance requirements, and ability to deliver vibrant visuals make them a popular choice for promotional purposes in various advertising campaigns.`;

  const [isMobileView, setIsMobileView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if the screen width is less than a certain breakpoint (e.g., 768px)
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  // Add an event listener to check for screen width changes
  React.useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  return (
    <div className='container'>
      <div className="container advantages-slider my-5 w-50 mx-auto">
        <Slider {...settings}>
          <div className="slide">
            <img src={Img1} alt="LED sign Board" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="LED sign Board" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="LED sign Board" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            LedSignBoard
          </h2>
        </div>
        <div className="head-content text-center">
          <p>
            {isMobileView && !isExpanded
              ? `${fullContent.slice(0, 200)}...`
              : fullContent}
            {isMobileView && !isExpanded && (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(true);
                }}
                className="read-more-link"
              >
                Read More
              </a>
            )}
            {isMobileView && isExpanded && (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(false);
                }}
                className="read-less-link"
              >
                Read Less
              </a>
            )}
          </p>
        </div>
      </div>
      <div className="flex-content">
        <div className="why">
          <div className="whyInner container-fluid">
            <div className='whyHead'>
              <div className='whyHeadTitle'>
                <h2 className="whyTitle">
                  What are the <span>Advantages</span> of using <span>LedSigBoard</span>
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <VisibilityIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Enhanced Visibility!
                  </div>
                  <div className="whyListItemBody">
                    Known for their high brightness and vibrant colors, making them easily visible even in broad daylight attracting attention from pedestrians
                  </div>
                </div>
                <div className="whyListItem">
                  <EnergySavingsLeafIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Energy Efficiency!
                  </div>
                  <div className="whyListItemBody">
                    Compared to traditional lighting solutions, LED sign boards consume less electricity, resulting in reduced operating costs
                  </div>
                </div>
                <div className="whyListItem">
                  <AlarmOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Longevity and Durability!
                  </div>
                  <div className="whyListItemBody">
                    Having longer lifespan that  last for tens of thousands of hours before requiring replacement, ensuring long-term cost savings and minimal maintenance .
                  </div>
                </div>
                <div className="whyListItem">
                  <TuneIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Customization Options!
                  </div>
                  <div className="whyListItemBody">
                    Businesses can design displays to showcase a variety of content, including text, images, animations, and even videos, making them ideal for promotional campaigns.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <UpdateIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Real-time Content Updates!
                  </div>
                  <div className="whyListItemBody">
                    By connecting to a centralized control system, for displaying time-sensitive information, special offers, ensuring message to remains relevant and up-to-date.
                  </div>
                </div>
                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Cost-Effective Advertising!
                  </div>
                  <div className="whyListItemBody">
                    Businesses can attract more attention, deliver visually appealing messages, and create a lasting impact on potential customers.
                  </div>
                </div>
                <div className="whyListItem">
                  <EngineeringIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Low Maintenance!
                  </div>
                  <div className="whyListItemBody">
                    Robust design and long lifespan mean that businesses do not have to frequently replace bulbs or make costly repairs, saving both time and money.
                  </div>
                </div>
                <div className="whyListItem">
                  <ChecklistIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Versatility in Size and Shape!
                  </div>
                  <div className="whyListItemBody">
                    By designing in various shapes and sizes to fit specific requirements. allowing unique and eye-catching displays that stand out from the competition.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LedSignBoard;