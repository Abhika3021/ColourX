import React from 'react'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import ScannerIcon from '@mui/icons-material/Scanner';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
const Brand = () => {
    return (
        <>
            <div className="why">
                <div className="whyInner container-fluid">
                    <div className='whyHead'>
                        <div className='whyHeadTitle'>
                            <h2 className="whyTitle">
                                Why <span>Brands</span> think <span>COLOURX</span> provides best Advertising solutions
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="whyList col-md-6">
                            <div className="whyListItem">
                                <TipsAndUpdatesTwoToneIcon className='brand-icon'/>
                                <div className="whyListItemTitle">Creativity!</div>
                                <div className="whyListItemBody">
                                    Our talented designers create eye-catching ad campaigns that leave a lasting impact.
                                </div>
                            </div>
                            <div className="whyListItem">
                                <ScannerIcon className='brand-icon' />
                                <div className="whyListItemTitle">State of the art Technology!</div>
                                <div className="whyListItemBody">
                                    Cutting-edge printing equipment ensures high-quality advertising materials.

                                </div>
                            </div>
                            <div className="whyListItem">
                                <Diversity2Icon className='brand-icon'/>
                                <div className="whyListItemTitle">Professional Team!</div>
                                <div className="whyListItemBody">
                                    Our dedicated professionals deliver seamless experiences from concept to execution.

                                </div>
                            </div>
                        </div>
                        <div className="whyList col-md-6">
                            <div className="whyListItem">
                                <AccessTimeFilledSharpIcon className='brand-icon'/>
                                <div className="whyListItemTitle">Timely Delivery!</div>
                                <div className="whyListItemBody">
                                    We meet deadlines without compromising on quality.
                                </div>
                            </div>
                            <div className="whyListItem">
                                <HubTwoToneIcon className='brand-icon'/>
                                <div className="whyListItemTitle">Client-Centric Approach!</div>
                                <div className="whyListItemBody">
                                    We understand your brand, audience, and goals to deliver tailor-made solutions.
                                </div>
                            </div>
                            <div className="whyListItem">
                                <MonetizationOnOutlinedIcon className='brand-icon'/>
                                <div className="whyListItemTitle">Cost-Effective Solutions!</div>
                                <div className="whyListItemBody">
                                    Great advertising at competitive prices, accessible to businesses of all sizes.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Brand