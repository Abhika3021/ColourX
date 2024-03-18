import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HistoryIcon from '@mui/icons-material/History';
import TuneIcon from '@mui/icons-material/Tune';
import { BsArrowsFullscreen } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Img1 from '../../images/services/flex standees/2.jpg'
import Img2 from '../../images/services/flex standees/3.webp'
import Img3 from '../../images/services/flex standees/images.jpg'
import Img4 from '../../images/services/flex standees/roll-up-standee.jpeg'
import Img5 from '../../images/services/canopy/1.webp'
import Img6 from '../../images/services/canopy/2.webp'
import Img7 from '../../images/services/canopy/3.webp'

const FlexStandiesAndCanopy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContentStandies = `It refer to portable display stands made from flexible, weather-resistant materials. These stands serve as versatile platforms to showcase advertisements or promotional content, often at events, trade shows, or retail spaces. They are lightweight and easy to set up, making them convenient for temporary displays.
  `;
  const fullContentCanopy = `Denotes a shelter structure with a flexible, printed covering used to shield products, booths, or outdoor promotional activities from the elements. Canopies are commonly employed at outdoor events, markets, or expos to provide shade and branding visibility.
  Both flex standies and canopies are pivotal tools in the marketing arsenal, offering eye-catching, portable solutions for businesses looking to grab attention and convey their messages effectively in various settings.
  `;


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
            <img src={Img1} alt="Flex Standees" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Flex Standees" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Flex Standees" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img4} alt="Flex Standees" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            Flex Standies
          </h2>
        </div>
        <div className="head-content text-center">
          <p>
            {isMobileView && !isExpanded
              ? `${fullContentStandies.slice(0, 200)}...`
              : fullContentStandies}
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
                  What are the <span>Advantages</span> of using <span>Flex</span> Standees
                </h2>
              </div>
            </div>

            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <BiTransfer className='brand-icon' />
                  <div className="whyListItemTitle"> Portability!</div>
                  <div className="whyListItemBody">
                    Can be quickly assembled and disassembled, making them ideal for events where mobility is essential.
                  </div>
                </div>
                <div className="whyListItem">
                  <TuneIcon className='brand-icon' />
                  <div className="whyListItemTitle"> Customizability!</div>
                  <div className="whyListItemBody">
                    Using vibrant graphics, images, and text to create eye-catching displays to attract attention and effectively conveying message.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">Cost-Effective Solution!</div>
                  <div className="whyListItemBody">
                    offer a cost-effective way to market products and services, as compared to other marketing products.
                  </div>
                </div>
                <div className="whyListItem">
                  <HistoryIcon className='brand-icon' />
                  <div className="whyListItemTitle"> Reusability!</div>
                  <div className="whyListItemBody">
                    Its durable can withstand multiple uses if handled with care making it sustainable option for promotional activities.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="container advantages-slider my-5 w-50 mx-auto">
          <Slider {...settings}>
            <div className="slide">
              <img src={Img5} alt="Canopy" className='service-img' />
            </div>
            <div className="slide">
              <img src={Img6} alt="Canopy" className='service-img' />
            </div>
            <div className="slide">
              <img src={Img7} alt="Canopy" className='service-img' />
            </div>
          </Slider>
        </div>

        <div className="flex-header">
          <div className="head text-center">
            <h2>
              Canopy
            </h2>
          </div>
          <div className="head-content text-center">
            <p>
              {isMobileView && !isExpanded
                ? `${fullContentCanopy.slice(0, 200)}...`
                : fullContentCanopy}
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
                    What are the <span>Advantages</span> of using <span>Canopy</span> Flex
                  </h2>
                </div>
              </div>

              <div className='row'>
                <div className="whyList col-md-6">
                  <div className="whyListItem">
                    <VisibilityIcon className='brand-icon' />
                    <div className="whyListItemTitle"> Branding and Visibility!</div>
                    <div className="whyListItemBody">
                      With use of logos, slogans, and brand colors, makes it an effective tool for enhancing brand visibility at outdoor events.
                    </div>
                  </div>
                  <div className="whyListItem">
                    <AddModeratorIcon className='brand-icon' />
                    <div className="whyListItemTitle"> Protection from the Elements!</div>
                    <div className="whyListItemBody">
                      Ensuring that the event or promotion can continue regardless of the weather conditions like sunlight, rain.
                    </div>
                  </div>
                </div>
                <div className="whyList col-md-6">
                  <div className="whyListItem">
                    <BsArrowsFullscreen className='brand-icon' />
                    <div className="whyListItemTitle">Large Advertising Space!</div>
                    <div className="whyListItemBody">
                      The large surface area of a canopy allows for more extensive and impactful advertising, making a lasting impression.
                    </div>
                  </div>
                  <div className="whyListItem">
                    <EngineeringIcon className='brand-icon' />
                    <div className="whyListItemTitle">
                      Easy to Install!
                    </div>
                    <div className="whyListItemBody">
                      Easy to setup and dismantle.  Can be quickly deployed at any locations, providing flexibility in event planning and execution.
                    </div>
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

export default FlexStandiesAndCanopy;