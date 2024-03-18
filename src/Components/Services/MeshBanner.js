import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ChecklistIcon from '@mui/icons-material/Checklist';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TbWindmillFilled } from 'react-icons/tb'
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import ScaleIcon from '@mui/icons-material/Scale';
import Img1 from '../../images/services/mesh/1.jpg'
import Img2 from '../../images/services/mesh/2.webp'
import Img3 from '../../images/services/mesh/3.png'

const MeshBanner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `They are specialized outdoor advertising materials and are constructed from a porous, perforated material that allows wind to pass through, reducing the risk of damage in windy conditions. Mesh banners are ideal for large-scale promotional displays, such as building wraps and outdoor signage. They offer durability and weather resistance, making them suitable for long-term outdoor use. The porous design maintains visibility from a distance while minimizing the sail effect caused by strong winds. Mesh banners are commonly used on scaffolding, construction sites, sports events, and as temporary advertising displays on fences or buildings. Their versatility and ability to withstand outdoor elements make them a popular choice for promoting businesses, events, or products in the flex printing and hoarding industry.`;

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
            <img src={Img1} alt="Mesh Banner" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Mesh Banner" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Mesh Banner" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            MeshBanner
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
                  What are the <span>uses</span> of <span>MeshBanner</span>
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Construction Site Hoardings
                  </h3>
                  <p>
                    As it allows wind to pass  through the banner, preventing risk of hoarding getting knocked down while still serving as an effective advertising medium.

                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Building Wraps
                  </h3>
                  <p>
                    showcasing the project's progress or advertise the upcoming development, making the construction site visually appealing while promoting it
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Event Banners and Stage Backdrops
                  </h3>
                  <p>
                    Their wind-resistant nature ensures that they remain intact throughout the event, no matter the weather conditions.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Sports Events and Stadium Advertisements
                  </h3>
                  <p>
                    Their wind resistance and high visibility ensure that the advertisements are seen clearly by the audience.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Street Banners and Lamp Post Displays
                  </h3>
                  <p>
                    Their ability to withstand wind makes them suitable for outdoor locations with substantial air movement.
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
                  What are the <span>Advantages</span> of using <span>MeshBanner</span> Flex
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <TbWindmillFilled className='brand-icon' />
                  <div className="whyListItemTitle">
                    Wind Resistance!
                  </div>
                  <div className="whyListItemBody">
                    It's perforated design allows air to flow through the banner, reducing wind load on it, preventing tearing and ensures the banner remains intact.
                  </div>
                </div>

                <div className="whyListItem">
                  <AlarmOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Durability!
                  </div>
                  <div className="whyListItemBody">
                    Made from high-quality materials that can withstand harsh environmental conditions, such as rain, sun exposure, and temperature fluctuations, have a longer lifespan.
                  </div>
                </div>

                <div className="whyListItem">
                  <VisibilityIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Visibility!
                  </div>
                  <div className="whyListItemBody">
                    holes are tiny enough not to hinder the overall impact of the graphics, allowing for clear and vibrant images, providing  seamless blend of visual appeal.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <ChecklistIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Versatility!
                  </div>
                  <div className="whyListItemBody">
                    Used for applications, including building wraps, fence wraps, scaffold covers, and hoardings.
                  </div>
                </div>

                <div className="whyListItem">
                  <ScaleIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                  Lightweight!
                  </div>
                  <div className="whyListItemBody">
                  Mesh banners are lightweight, making them easier to install and transport compared to solid vinyl banners.
                  </div>
                </div>

                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                  Cost-Efficiency!
                  </div>
                  <div className="whyListItemBody">
                  They are often more cost-effective than solid vinyl banners, making them a budget-friendly option for large-scale advertising.
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

export default MeshBanner;