import Img from '../images/logo.png';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='footer-logo col-sm-4 col-xs'>
                        <div>
                            <img src={Img} alt='image' style={{ height: '50px', width: '60px' }}></img>
                            <h2>ColourX</h2>
                            <div className='bottomnav'>
                                <Link to='/' className='nav-link'>Home</Link>
                                <Link to='/about-us' className='nav-link'>About us</Link>
                                <Link to='/services' className='nav-link'>Services</Link>
                                <Link to='/contact-us' className='nav-link'>Contact us</Link>
                            </div>
                        </div>
                    </div>

                    <div className='footer-contact col-sm-4 col-xs'>
                        <div>
                            <h2>
                                Contact Us!
                            </h2>
                            <p>
                                ColourX<br />
                                1st floor,<br />
                                Gyan lok main gate, Hapur,<br />
                                UttarPradesh, 245101
                            </p>

                            <a href="mailto:colourxads@gmail.com">
                                <div className="icon">
                                    <MailOutlineIcon style={{color:'#F7DC5A',fontSize:40}}/>
                                </div>
                                colourxads@gmail.com
                            </a>
                            <a href="tel: +91 9758586358" className="mb-2">
                                <div className="icon">
                                    <PhoneIcon style={{color:'#F7DC5A',fontSize:40}}/>
                                </div>
                                +91 97585 86358

                            </a>
                        </div>
                    </div>

                    <div className='footer-connect col-sm-4 col-xs'>
                        <div>
                            <h2>Get In Touch!</h2>
                            <div className='social-icons'>
                            <a href="https://wa.me/9758586358"><WhatsAppIcon style={{fontSize:30}} /></a>
                            {/* <a href="#"><LinkedInIcon /></a>
                            <a href="#"><FacebookIcon /></a>
                            <a href="#"><YouTubeIcon /></a> */}
                            <a href="https://maps.app.goo.gl/q8Zpb8TUDyByNPP77"><RoomIcon style={{fontSize:30}} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">© <span className="currentyear"></span> ColourX. All
                Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer