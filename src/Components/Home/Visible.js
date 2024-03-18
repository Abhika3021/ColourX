import React from 'react'
import Img from '../../images/logo.png';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { GiHumanTarget } from 'react-icons/gi'
import { Button } from '@mui/material';
const Visible = () => {
    return (
        <div className='intro bg-black text-white'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='visible col-md-6 order-md-first order-last'>
                        <h2>Be Visible!<br /> Be Memorable!</h2>
                        <p>
                            Despite the rise of digital
                            advertising and online media, outdoor branding through flex and hoardings continues to offer unique advantages in terms of
                        </p>
                        <ul>
                            <li><VisibilitySharpIcon className='intro-icon' /> Visibility</li>
                            <li><WorkOutlineOutlinedIcon className='intro-icon' /> Brand reinforcement</li>
                            <li><GiHumanTarget className='intro-icon' /> Local targeting</li>
                        </ul>
                        {/* <div className='read-button'>
                            <Button className='btn' style={{
                                backgroundColor: '#F7DC5A',
                                color: 'black',
                                borderRadius: 10,
                                fontSize: 18
                            }} variant="contained">Read More</Button>
                        </div> */}
                    </div>
                    <div className='logo col-md-6 order-first'>
                        <img src={Img} alt='image' width="100%"/>
                        <p>FLEX PRINTING <br />
                        OUTDOOR ADVERTISING<br /> 
                        HOARDINGS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visible