import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCloudSunRain } from 'react-icons/fa';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SecurityIcon from '@mui/icons-material/Security';
import LightModeIcon from '@mui/icons-material/LightMode';
import Img1 from '../../images/services/one way/Introducing-Our-New-One-Way-Vision-Film-Ultravision_0dcb9a687eb39761cab0a9745efca456_8877a1e41a9899e9d1bb1f264f777a6f.jpg'
import Img2 from '../../images/services/one way/One-Way-Vision-print.jpg'
import Img3 from '../../images/services/one way/one-way-vision-film-1590553298-5453023.jpeg'

const OneWayVision = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `It refers to a specialized printing technique that enables visuals on a display, such as billboards or window graphics, to be visible from one side while appearing opaque from the other. This effect is achieved through the use of a perforated vinyl material. 
  Vinyl sheet contains tiny holes, allowing people on one side to view the graphics or message clearly, while those on the opposite side perceive it as a solid, uniform surface. This unique feature is advantageous for advertising purposes as it allows businesses to maintain privacy or aesthetics on one side, while effectively showcasing promotional content to the public. This technique finds widespread application in storefront window displays, vehicle wraps, and large outdoor advertisements, as it strikes a balance between marketing visibility and preserving the aesthetics of the display surface.`;

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
            <img src={Img3} alt="One way vision" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="One way vision" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img1} alt="One way vision" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            OneWayVision
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
        <div className="uses">
          <div className="usesInner container-fluid">
            <div className='usesHead'>
              <div className='usesHeadTitle'>
                <h2 class="usesTitle">
                  What are the <span>uses</span> of <span>OneWayVision</span>
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Building Wraps and Hoardings
                  </h3>
                  <p>
                    Allowing vibrant and eye-catching graphics to be displayed while still allowing people inside buildings to see through the material.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Vehicle Wraps
                  </h3>
                  <p>
                    wraping commercial cars, buses, and even personal vehicles, enabling businesses to promote their products without obstructing the driver's vision from inside the vehicle.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Storefront Advertising
                  </h3>
                  <p>
                    Retail stores often use windows to showcase advertisements to passersby without obstructing view for potential customers inside the store.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Exhibition and Event Signage
                  </h3>
                  <p>
                    Used in creaeting visually stunning displays that attract attention while maintaining visibility for visitors inside the booth.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="why">
          <div className="whyInner container-fluid">
            <div className='whyHead'>
              <div className='whyHeadTitle'>
                <h2 className="whyTitle">
                  What are the <span>Advantages</span> of using <span>OneWayVision</span>
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <SecurityIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Visibility and Privacy!
                  </div>
                  <div className="whyListItemBody">
                    Offer privacy to people in urban areas or spaces by providing a clear view of the printed graphic on one side and privacy to other.
                  </div>
                </div>

                <div className="whyListItem">
                  <FaCloudSunRain className='brand-icon' />
                  <div className="whyListItemTitle">
                    Weather Resistance!
                  </div>
                  <div className="whyListItemBody">
                    Designed to withstand various weather conditions, ensuring  graphics remain vibrant and durable for an extended period.
                  </div>
                </div>

                <div className="whyListItem">
                  <EngineeringIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Easy installation and Removal!
                  </div>
                  <div className="whyListItemBody">
                    Making it convenient for businesses to update their advertising campaigns frequently.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <LightModeIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    UV Protection!
                  </div>
                  <div className="whyListItemBody">
                    Designed to provide UV protection, which can help preserve the printed graphics and extend their lifespan.
                  </div>
                </div>
                <div className="whyListItem">
                  <ThermostatIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Reduces Glare and Heat!
                  </div>
                  <div className="whyListItemBody">
                    Help in reduce glare and heat inside buildings and vehicles, providing a more comfortable environment.
                  </div>
                </div>
                <div className="whyListItem">
                  <ChecklistIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Versatility!
                  </div>
                  <div className="whyListItemBody">
                    Suitable for various applications, including vehicle wraps, window displays, and building wraps.
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

export default OneWayVision;