import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import TuneIcon from '@mui/icons-material/Tune';
import ReplayIcon from '@mui/icons-material/Replay';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PaletteIcon from '@mui/icons-material/Palette';
import Img1 from '../../images/services/star/flex-banner-2-500x500.webp'
import Img2 from '../../images/services/star/2.png'
import Img3 from '../../images/services/star/3.png'

const StarFlex = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
  };

  const fullContent = `It refers to a specialized type of printable material that boasts exceptional durability and vivid color reproduction. Star flex is constructed from a resilient PVC , substrate, fortified with UV-resistant properties, rendering it ideal for outdoor applications such as billboards, banners, and hoardings. It has ability to withstand harsh weather conditions, including intense sunlight, heavy rains, and strong winds, without compromising print quality. The term "star" in star flex signifies its stellar performance in enduring the rigors of outdoor exposure while maintaining the brilliance of printed graphics and text. Due to its longevity and visual appeal, it is a preferred choice for large-format advertising campaigns, ensuring that messages and visuals remain striking and vibrant even under adverse environmental circumstances.`;

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
            <img src={Img1} alt="Star Flex" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img2} alt="Star Flex" className='service-img' />
          </div>
          <div className="slide">
            <img src={Img3} alt="Star Flex" className='service-img' />
          </div>
        </Slider>
      </div>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            Star Flex
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
                  What are the <span>uses</span> of <span>Star</span> Flex
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Outdoor Banners and Hoardings
                  </h3>
                  <p>
                    ideal due to its robustness and ability to withstand outdoor conditions. It is commonly used for promotional banners, event advertisment
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Billboards
                  </h3>
                  <p>
                    It's excellent durability ensures that billboards can withstand exposure to harsh weather conditions, which is crucial for long-term outdoor advertising.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Event Backdrops
                  </h3>
                  <p>
                    During trade show, conference, or stage performance, star flex can be used to create visually striking backdrops that effectively promote brands or enhance the event's theme.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Building Wraps
                  </h3>
                  <p>
                    Its size and durability make it suitable for Large-scale advertisements on the facades of buildings  covering substantial surfaces.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Street Banners
                  </h3>
                  <p>
                    oftenly used to display public messages, event announcements, or seasonal greetings on street poles or lamp posts.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Vehicle Wraps
                  </h3>
                  <p>
                    By turning cars, buses, or trucks into moving advertisements, reaching a broader audience while on the road.
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
                  What are the <span>Advantages</span> of using <span>Star</span> Flex
                </h2>
              </div>
            </div>

            <div className="container advantages-slider mb-5">

              <div className='row'>
                <div className="whyList col-md-6">
                  <div className="whyListItem">
                    <AlarmOnIcon className='brand-icon' />
                    <div className="whyListItemTitle">Durability!</div>
                    <div className="whyListItemBody">
                      Designed to withstand harsh environmental conditions like sunlight, rain, wind, and temperature variations without significant wear and tear making it reliable.
                    </div>
                  </div>


                  <div className="whyListItem">
                    <ReplayIcon className='brand-icon' />
                    <div className="whyListItemTitle">
                      Reusable!
                    </div>
                    <div className="whyListItemBody">
                      Sometimes can be reused for different events or campaigns, further enhancing their cost-effectiveness.
                    </div>
                  </div>

                  <div className="whyListItem">
                    <MonetizationOnIcon className='brand-icon' />
                    <div className="whyListItemTitle">
                      Cost-Effective!</div>
                    <div className="whyListItemBody">
                      It is relatively affordable, making it a cost-effective choice for large-scale advertising campaigns and outdoor promotions.
                    </div>
                  </div>


                </div>
                <div className="whyList col-md-6">
                  <div className="whyListItem">
                    <TuneIcon className='brand-icon' />
                    <div className="whyListItemTitle">
                      Customizable Sizes!
                    </div>
                    <div className="whyListItemBody">
                      Can be easily cut to the desired dimensions without compromising on quality allowing for customization based on the specific requirements of project.
                    </div>
                  </div>


                  <div className="whyListItem">
                    <PaletteIcon className='brand-icon' />
                    <div className="whyListItemTitle">
                      Vibrant Printing!
                    </div>
                    <div className="whyListItemBody">
                      Star flex allows for high-quality, vibrant, and sharp printing, making graphics and text stand out.
                    </div>
                  </div>

                  <div className="whyListItem">
                    <ChecklistIcon className='brand-icon' />
                    <div className="whyListItemTitle">
                      Versatility!
                    </div>
                    <div className="whyListItemBody">
                      Star flex can be used for various advertising materials, including banners, billboards, and posters.
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

export default StarFlex;