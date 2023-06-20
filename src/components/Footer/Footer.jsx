import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">GONGOOL</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#About" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#Portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#Testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="https://github.com/gongool" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://wa.me/+249992929291" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-whatsapp-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/gongool/" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-linkedin-square"></i>
                    </a>

                </div>

                <span className="footer__copy">
                     &#169; GONGOOl . All Rights Reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer