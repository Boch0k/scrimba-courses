import React from 'react'
import Twitter from '../img/TwitterIcon.svg'
import Facebook from '../img/FacebookIcon.svg'
import Instagram from '../img/InstagramIcon.svg'
import In from '../img/LinkedinIcon.svg'
import GitHub from '../img/GitHubIcon.svg'

export const Footer = () => {
    return (
        <footer>
            <div className='card-wrapper'>
                <div className="footer__wrapper">
                    <img src={Twitter} alt="icon" />
                    <img src={Facebook} alt="icon" />
                    <img src={Instagram} alt="icon" />
                    <img src={In} alt="icon" />
                    <img src={GitHub} alt="icon" />
                </div>
           </div>
        </footer>
    );
}