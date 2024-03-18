import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TuneIcon from '@mui/icons-material/Tune';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Img1 from '../../images/services/glow/backlit-glow-sign-board-500x500.webp'
import Img2 from '../../images/services/glow/flex-vinyl-glow-sign-board.jpg'
import Img3 from '../../images/services/glow/glow-sign-board-500x500.webp'

const GlowSignBoard = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, 
  };

  const fullContent = `They are illuminated advertising displays commonly incorporating flexible printed materials, such as vinyl or PVC, which are chosen for their durability and versatility. The key feature of glow sign boards is their capacity to emit light, enhancing visibility during both day and night. Typically, these boards are equipped with LED lighting systems strategically positioned behind the printed material.
  It's utilization is to amplify the visual impact of advertising campaigns, making them highly effective for businesses seeking to capture the attention of a broad audience. Moreover, their robust construction ensures they can withstand varying weather conditions, In essence, glow sign boards represent a dynamic blend of flex printing technology and luminous illumination, making them a quintessential tool in the arsenal of advertising professionals.`;

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
            <img src={Img1} alt="Glow Sign Board" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Glow Sign Board" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Glow Sign Board" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            GlowSignBoard
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
                  What are the <span>uses</span> of <span>GlowSignBoard</span>
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Advertising and Branding
                  </h3>
                  <p>
                    It is strategically placed at high-visibility locations to grab the attention of passersby, motorists, or potential customers
                  </p>
                </li>
                <li>
                  <h3 className='usesListItemTitle'>
                    Public Information
                  </h3>
                  <p>
                    Also utilized for conveying important public information, such as directions, safety guidelines, and announcements.
                  </p>
                </li>
                <li>
                  <h3 className='usesListItemTitle'>
                    Event Promotions
                  </h3>
                  <p>
                    For large events, festivals, or exhibitions, glow sign boards are an effective way to promote the event and attract attendees.
                  </p>
                </li>
                <li>
                  <h3 className='usesListItemTitle'>
                    Storefront Signage
                  </h3>
                  <p>
                    Helping retail stores to create an inviting ambiance and making their presence more noticeable, especially during the evening or nighttime.
                  </p>
                </li>
                <li>
                  <h3 className='usesListItemTitle'>
                    Wayfinding Signage
                  </h3>
                  <p>
                    Used in complex locations like malls, airports, or large facilities, guiding visitors to their desired destinations.
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
                  What are the <span>Advantages</span> of using <span>GlowSignBoard</span>
                </h2>
              </div>
            </div>

            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <VisibilityIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Visibility and Impact!
                  </div>
                  <div className="whyListItemBody">
                    Illuminated nature makes them highly visible especially during low-light conditions or at night enhancing their impact and message recall.
                  </div>
                </div>

                <div className="whyListItem">
                  <TuneIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Customizability!
                  </div>
                  <div className="whyListItemBody">
                    Businesses can tailor the size, design, color scheme, and content according to their specific branding and promotional requirements.
                  </div>
                </div>

                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Cost-Effective!
                  </div>
                  <div className="whyListItemBody">
                    Relatively affordable compared to other forms of advertising, making them accessible to small and medium-sized businesses.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <AlarmOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Durability!
                  </div>
                  <div className="whyListItemBody">
                    Constructed using high-quality materials  helping withstand various weather conditions, ensuring a longer advertising lifespan.
                  </div>
                </div>
                <div className="whyListItem">
                  <EnergySavingsLeafIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Energy-Efficient!
                  </div>
                  <div className="whyListItemBody">
                    With advancements in LED technology, glow sign boards have become more energy-efficient, consuming less power while providing consistent illumination.
                  </div>
                </div>
                <div className="whyListItem">
                  <ShowChartIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Quick Turnaround!
                  </div>
                  <div className="whyListItemBody">
                    Enabling businesses to respond rapidly to market trends or time-sensitive promotions.
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

export default GlowSignBoard;