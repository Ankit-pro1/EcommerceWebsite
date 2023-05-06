import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Contact.scss'

function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US</span>
            <div className="mail">
                <input type="text" placeholder='Enter your email..' />
                <button>Join Us</button>
            </div>
            <div className="socialIcons">
                <a href="#"><FacebookIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><TwitterIcon/></a>
                <a href="#"><GoogleIcon/></a>
                <a href="#"><PinterestIcon/></a>            
            </div>
        </div>      
    </div>
  )
}

export default Contact
