import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlideshow = () => {
    const carouselItems = [
        <div>
            {/* Component 1 */}
            <h4>Visibility and Reach</h4>
            <p>Outdoor branding on flex and hoardings provides high visibility and reach as they are typically placed in high-traffic areas, ensuring exposure to a large and diverse audience. Pedestrians, commuters, and motorists all come across these displays, making it an effective way to target a wide range of potential customers.</p>
        </div>,
        <div>
            {/* Component 2 */}
            <h4>Complement to Digital Advertising</h4>
            <p>While digital advertising has gained popularity, outdoor branding complements it by offering a tangible and physical presence. In a world dominated by screens, flex and hoardings offer a refreshing and attention-grabbing alternative, enhancing the overall impact of advertising campaigns.</p>
        </div>,
        <div>
            {/* Component 3*/}
            <h4>Brand Recall and Reinforcement</h4>
            <p>The consistent display of a brand's message on flex and hoardings helps reinforce brand identity and improves brand recall. When people repeatedly see a brand's message in their daily lives, it creates a lasting impression and familiarity, making them more likely to remember and trust the brand.</p>
        </div>,
        <div>
            {/* Component 4 */}
            <h4>VLocal Targeting</h4>
            <p>Flex and hoardings are particularly effective for local targeting, especially for businesses with a physical presence in a specific area. Local businesses can use these outdoor displays to attract nearby customers and increase foot traffic to their stores or establishments.</p>
        </div>,
        <div>
            {/* Component 5 */}
            <h4>Cost-Effective</h4>
            <p>Compared to certain forms of digital advertising and media placements, outdoor branding through flex and hoardings can be a cost-effective option, especially for long-term campaigns. Once the initial investment is made, the ongoing costs are relatively low, making it an attractive option for businesses with budget constraints.</p>
        </div>,
        <div>
            {/* Component 6 */}
            <h4>Non-Intrusive Advertising</h4>
            <p>Unlike some digital ads that interrupt online activities, outdoor branding is non-intrusive. People can choose to engage with the ad or simply absorb the message passively as they go about their daily routines.</p>
        </div>,
        <div>
            {/* Component 7 */}
            <h4>Captive Audience</h4>
            <p>In scenarios like traffic jams or waiting at traffic signals, people may have limited entertainment options. Outdoor branding on hoardings can catch the attention of this captive audience, providing a chance for the message to make a lasting impact.</p>
        </div>,
        <div>
            {/* Component 8 */}
            <h4>Creativity and Innovation</h4>
            <p>Flex and hoardings offer ample space for creativity and innovation in advertising. Brands can use large-format displays to tell compelling stories, showcase captivating visuals, and deliver memorable messages, leaving a stronger impression on the audience.</p>
        </div>,
        <div>
            {/* Component 9 */}
            <h4>Event Promotion</h4>
            <p>For promoting events such as concerts, festivals, or product launches, outdoor branding on flex and hoardings can be highly effective. It builds anticipation and generates buzz in the local community.</p>
        </div>,
        <div>
            {/* Component 10 */}
            <h4>Supplementing Digital Presence</h4>
            <p>Outdoor branding can serve as a physical extension of a brand's digital presence. Including website URLs, social media handles, or QR codes on hoardings allows passersby to connect with the brand online, bridging the gap between physical and digital marketing efforts.</p>
        </div>,
    ];

    return (
        <div>
            <h2>Benefit</h2>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                {carouselItems}
            </Carousel>
        </div>
    );
};

export default CarouselSlideshow;
