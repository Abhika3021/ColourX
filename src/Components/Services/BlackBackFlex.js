import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PiCubeTransparentFill } from 'react-icons/pi';
import ReplayIcon from '@mui/icons-material/Replay';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Img1 from '../../images/services/black back/baldota-hoarding.jpg'
import Img2 from '../../images/services/black back/hoarding-500x500-1.jpg'
import Img3 from '../../images/services/black back/hoarding-advertisement-service.jpg'

const BlackBackFlex = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `"It refers to a specialized type of flex material with distinctive characteristics. Blackback flex, as the name suggests, incorporates a black layer on its reverse side. This black layer serves a pivotal purpose, as it prevents light from passing through the flex material. Consequently, when such flex is used for hoarding or banner applications, it ensures that the imagery or content displayed remains vivid and visually striking, even when exposed to bright sunlight or other sources of illumination. This feature eliminates the undesirable effect of translucency often seen in standard flex materials, where the underlying structure or background can interfere with the clarity of the printed design. Blackback flex thus enhances the overall visual impact of outdoor advertising, making it an indispensable choice for large-format printing projects, particularly for hoardings, banners, and promotional displays.`;

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
            <img src={Img1} alt="Black back Flex" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Black back Flex" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Black back Flex" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            BlackBack Flex
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
                  What are the <span>uses</span> of <span>BlackBack</span> Flex
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
                    Used in illuminated signs or lightboxes, as it prevents the light from shining through, maintaining the intended appearance of the display.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Double-Sided Banners
                  </h3>
                  <p>
                    When displayed different images on either side of a banner, it ensures the content on one side doesn't show through content on the other side.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Event Backdrops
                  </h3>
                  <p>
                    Used where the backdrop needs to block out any distracting elements behind it, providing a clean and professional look              </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Exhibition Graphics
                  </h3>
                  <p>
                    Used for large graphics or banners that need to be displayed against a variety of backgrounds without any distortion or interference.
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
                  What are the <span>Advantages</span> of using <span>BlackBack</span> Flex
                </h2>
              </div>
            </div>

            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <AutoAwesomeIcon className='brand-icon' />
                  <div className="whyListItemTitle">Enhanced Opacity!</div>
                  <div className="whyListItemBody">
                    Ensuring that light from behind the banner or hoarding does not show through the printed graphics  enhancing the visibility and clarity.
                  </div>
                </div>

                <div className="whyListItem">
                  <PiCubeTransparentFill className='brand-icon' />
                  <div className="whyListItemTitle">No Show-Through!</div>
                  <div className="whyListItemBody">
                    Eliminating this issue of Visibility of one side from the other when light passes through it, maintaining the integrity of the design.
                  </div>
                </div>

                <div className="whyListItem">
                  <DataUsageIcon className='brand-icon' />
                  <div className="whyListItemTitle">Versatile Usage!</div>
                  <div className="whyListItemBody">
                    Suitable for both single-sided and double-sided printing applications, making it a versatile option for various outdoor advertising needs.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <ReplayIcon className='brand-icon' />
                  <div className="whyListItemTitle">Reusability!</div>
                  <div className="whyListItemBody">
                    With proper care and storage, it can be reused for future campaigns, maximizing the return on investment.
                  </div>
                </div>
                <div className="whyListItem">
                  <ChecklistIcon className='brand-icon' />
                  <div className="whyListItemTitle">Versatile Applications!</div>
                  <div className="whyListItemBody">
                    Can easily be customized and applied to various surfaces, making it a versatile material for advertising and safety needs.
                  </div>
                </div>
                <div className="whyListItem">
                  <VisibilityIcon className='brand-icon' />
                  <div className="whyListItemTitle">High Visibility!</div>
                  <div className="whyListItemBody">
                    Particularly in low-light conditions or when illuminated by artificial light sources,  significantly enhances safety and the effectiveness of advertisements.
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

export default BlackBackFlex;