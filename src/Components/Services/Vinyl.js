import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FaCloudSunRain } from 'react-icons/fa';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PaletteIcon from '@mui/icons-material/Palette';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Img1 from '../../images/services/vinyl/3.png'
import Img2 from '../../images/services/vinyl/outdoor-hoarding-flex-board.jpg'
import Img3 from '../../images/services/vinyl/vinyl-flex-board.jpg'

const Vinyl = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `In this context, refers to a versatile synthetic material renowned for its durability and suitability for large-format advertising. It is commonly used as the substrate or medium upon which vibrant graphics, advertisements, and messages are printed. Vinyl, in this industry, typically comes in rolls of varying thicknesses and finishes, allowing for customization based on specific project requirements. Its notable attributes include weather resistance, UV stability, and robust tear resistance, making it an ideal choice for outdoor signage and hoardings. Vinyl's flexibility enables it to conform to diverse surfaces, including billboards, vehicle wraps, banners, and building wraps.
  Moreover, vinyl's printability with vibrant, fade-resistant inks ensures that graphics remain vivid and eye-catching even in challenging outdoor conditions. It empowers businesses to communicate effectively with their target audiences.`;

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
            <img src={Img1} alt="Vinyl" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Vinyl" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Vinyl" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            Vinyl
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
                  What are the <span>uses</span> of <span>Vinyl</span>
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Banner Printing
                  </h3>
                  <p>
                    Used to print banners for various purposes due to its durability and vibrant color reproduction.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Hoarding Displays
                  </h3>
                  <p>
                    Cab printed and used for large hoarding displays due to their weather-resistant properties.

                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Vehicle Graphics
                  </h3>
                  <p>
                    Vinyl wraps are applied to vehicles for advertising, turning them into moving billboards.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Event Backdrops
                  </h3>
                  <p>
                    Used to create backdrops for events, trade shows, and exhibitions.
                  </p>
                </li>
                <li>
                  <h3 className='usesListItemTitle'>
                    Outdoor Signage
                  </h3>
                  <p>
                    Vinyl signs are weather-resistant and durable, making them suitable for outdoor advertising.
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
                  What are the <span>Advantages</span> of using <span>Vinyl</span>
                </h2>
              </div>
            </div>

            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <VisibilityIcon className='brand-icon' />
                  <div className="whyListItemTitle">High Visibility:</div>
                  <div className="whyListItemBody">Particularly in low-light conditions or when illuminated by artificial light sources, significantly enhances safety and the effectiveness of advertisements.</div>
                </div>
                <div className="whyListItem">
                  <AddModeratorIcon className='brand-icon' />
                  <div className="whyListItemTitle">Enhanced Safety:</div>
                  <div className="whyListItemBody">Helps drivers and pedestrians quickly recognize important information, even from a distance, reducing the chance of accidents.</div>
                </div>
                <div className="whyListItem">
                  <FaCloudSunRain className='brand-icon' />
                  <div className="whyListItemTitle">Durable and Weather-Resistant:</div>
                  <div className="whyListItemBody">Designed to withstand harsh weather conditions, like exposure to sunlight, rain, ensuring a longer lifespan.</div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">Cost-Effective Solution:</div>
                  <div className="whyListItemBody">Although having a higher upfront cost compared to regular materials, its long-lasting nature and effectiveness make it a cost-effective solution over time.</div>
                </div>
                <div className="whyListItem">
                  <ChecklistIcon className='brand-icon' />
                  <div className="whyListItemTitle">Versatile Applications:</div>
                  <div className="whyListItemBody">Can easily be customized and applied to various surfaces, making it a versatile material for advertising and safety needs.</div>
                </div>
                <div className="whyListItem">
                  <PaletteIcon className='brand-icon' />
                  <div className="whyListItemTitle">Vibrant Painting:</div>
                  <div className="whyListItemBody">Vinyl allows for high-quality, vibrant, and sharp printing, making graphics and text stand out.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Vinyl;