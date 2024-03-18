import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCloudSunRain } from 'react-icons/fa';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TuneIcon from '@mui/icons-material/Tune';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import Img1 from '../../images/services/flex signage/1.jpg'
import Img2 from '../../images/services/flex signage/2.webp'
import Img3 from '../../images/services/flex signage/3.jpg'

const FlexSignages = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `It refer to versatile, durable, and cost-effective advertising displays crafted from flexible PVC-based material. These signages serve as prominent visual tools for businesses to convey messages, promotions, or branding. Typically produced through digital printing, flex signages offer vibrant graphics, ensuring eye-catching displays that can withstand various weather conditions. Their lightweight nature allows for easy installation and portability, making them suitable for both indoor and outdoor applications. In the competitive realm of advertising, flex signages offer a budget-friendly alternative without compromising on visual impact. Whether it's promoting products, events, or services, flex signages provide an effective means to capture the attention of potential customes.`;

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
            <img src={Img1} alt="Flex Signages" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Flex Signages" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Flex Signages" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            Flex Signage
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
                  What are the <span>uses</span> of <span>Flex Signage</span>
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
                    Are used along roadsides, highways, and busy urban area making them an ideal choice for showcasing products, events, promotion.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Banners and Posters
                  </h3>
                  <p>
                    Used for promotional activities, including product launches, events, trade shows, and local advertisements.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Building Wraps
                  </h3>
                  <p>
                    Transforming them into eye-catching advertisement and can turn an entire structure for promotion.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Backdrops and Stage Displays
                  </h3>
                  <p>
                    Used for events, conferences, concerts, and exhibitions for promotion.
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
                  What are the <span>Advantages</span> of using <span>Flex Signage</span>
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">Cost-Effective!</div>
                  <div className="whyListItemBody">
                    Relatively inexpensive compared to materials like metal, wood, or glass makeing it economical for businesses.
                  </div>
                </div>
                <div className="whyListItem">
                  <FaCloudSunRain className='brand-icon' />
                  <div className="whyListItemTitle">Weather Resistance!</div>
                  <div className="whyListItemBody">
                  Highly durable and designed to withstand weather conditions, including rain, wind, and sunlight ensuring long-lasting displays.
                  </div>
                </div>
                <div className="whyListItem">
                  <HighQualityIcon className='brand-icon' />
                  <div className="whyListItemTitle">High-Quality Printing!</div>
                  <div className="whyListItemBody">
                  Allowing vibrant colors and sharp graphics making them visually appealing in capturing the attention of the target audience.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <TuneIcon className='brand-icon' />
                  <div className="whyListItemTitle">Customizability!</div>
                  <div className="whyListItemBody">
                  Allowing businesses to tailor their advertisements to specific sizes, designs, and messages, creating impactful marketing campaigns.
                  </div>
                </div>
                <div className="whyListItem">
                  <ChecklistIcon className='brand-icon' />
                  <div className="whyListItemTitle">Versatility!</div>
                  <div className="whyListItemBody">
                  Can be used for both indoor and outdoor applications, making it a versatile option for a wide range of advertising needs.
                  </div>
                </div>
                <div className="whyListItem">
                  <FindReplaceIcon className='brand-icon' />
                  <div className="whyListItemTitle">Replaceability!</div>
                  <div className="whyListItemBody">
                  It can be replaced without significant expenses, allowing businesses to stay up-to-date with their promotions.
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

export default FlexSignages;