import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import { FaCloudSunRain } from 'react-icons/fa';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Img1 from '../../images/services/blacklit/Backlit_Flex_Banner_Print_1.jpg'
import Img2 from '../../images/services/blacklit/Impresión-Película-Backlit-HP-printika-1-1024x1024.jpg'
import Img3 from '../../images/services/blacklit/backlit-flex-board-500x500.webp'

const BackLightFlex = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `"Backlight flex" denotes a specialized type of flexible substrate engineered for deployment in backlit advertising displays. These displays are characterized by their illumination originating from a rear source, commonly employing technologies such as LEDs. Backlight flex materials possess a semi-translucent quality, facilitating the transmission of light through them. This attribute enhances the luminosity and vividness of the printed imagery or textual content when subjected to backlighting. Consequently, backlight flex emerges as the preferred choice for crafting attention-grabbing and illuminated promotional exhibits, including billboards, posters, and signage designed to maintain visibility throughout both daytime and nighttime hours.`;

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
            <img src={Img1} alt="Blacklight Flex" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Blacklight Flex" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Blacklight Flex" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            BackLight Flex
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
                  What are the <span>uses</span> of <span>BackLight</span> Flex
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Billboards and Hoardings
                  </h3>
                  <p>
                    When strategically placed in high traffic area, it's Backlit feature enhances visibility, making it easily readable even from a distance
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Transit Advertising
                  </h3>
                  <p>
                    Whe Placed on bus shelters, metro stations, and airport terminals it's illuminated graphics draw the eyes of passersby and commuters.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Shopping Mall Displays
                  </h3>
                  <p>
                    Used for creating attractive and dynamic displays, From promotional banners to illuminated signs, enhancing the ambiance and attract potential customers to stores and specific products.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Exhibition Graphics
                  </h3>
                  <p>
                    Helps to make booths and stalls more visible and appealing, creating a captivating atmosphere that draws visitors to the displays.
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
                  What are the <span>Advantages</span> of using <span>BackLight</span> Flex
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">Excellent Visibility!</div>
                  <div className="whyListItemBody">
                    Illuminated graphics make  the advertisements stand out, especially in low-light or nighttime condition making them more memorable and impactful.
                  </div>
                </div>
                <div className="whyListItem">
                  <AutoFixHighIcon className='brand-icon' />
                  <div className="whyListItemTitle">Enhanced Aesthetics!</div>
                  <div className="whyListItemBody">
                    Backlight effect elevates the overall aesthetics of the display, leaving a positive impression, making them visually appealing and attention-grabbing.
                  </div>
                </div>
                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">Cost-Effective!</div>
                  <div className="whyListItemBody">
                    Illuminated advertising displays allows for efficient use of lighting resources, reducing energy consumption and operational costs.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <FaCloudSunRain className='brand-icon' />
                  <div className="whyListItemTitle">Durable and Weather-Resistant!</div>
                  <div className="whyListItemBody">
                    Can withstand weather conditions like rain, wind, and sunligh, ensuring the graphics to remain intact and vibrant, providing long-lasting exposure for promotion.
                  </div>
                </div>
                <div className="whyListItem">
                  <HubTwoToneIcon className='brand-icon' />
                  <div className="whyListItemTitle">Flexibility in Design!</div>
                  <div className="whyListItemBody">
                    Enabling creative professionals to come up with unique and captivating visuals that align with the brand's message and objectives.
                  </div>
                </div>
                <div className="whyListItem">
                  <EngineeringIcon className='brand-icon' />
                  <div className="whyListItemTitle">Easy Installation and Maintenance!</div>
                  <div className="whyListItemBody">
                    Making the setup process efficient and hassle-free, ensuring the advertisements retain their effectiveness throughout their display period.
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

export default BackLightFlex;