import React from 'react';
import './Socials.css';
import mailIcon from './SocialImages/mail.png';
import phoneIcon from './SocialImages/phone.png';
import instagramIcon from './SocialImages/instagram.png';


const Social = () => {
  const handleCall = () => {
    window.location.href = 'tel:+'; 
};
    return (
        <div className="social-container">
                    {/* <AOSInitializer/> */}
          <div className='SocialContactContainer'data-aos="fade-up"
              data-aos-duration="3000">
            <h2>Contact Me!</h2>
            <div className="social-icons">
                
            <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            
                
                <a href="mailto:" target="_blank" rel="noopener noreferrer">
                    <img src={mailIcon} alt="Email" />
                </a>
                <a href="tel:+" onClick={handleCall}>
                    <img src={phoneIcon} alt="Phone" />
                </a>
                </div>
            </div>
        </div>
    );
}

export default Social;
