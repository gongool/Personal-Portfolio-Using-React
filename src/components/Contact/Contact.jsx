import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me </span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">Talk To Me</h3>
                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">gongool@hotmail.com</span>
                            <a href="mailto:gongool@hotmail.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+249 992929291</span>
                            <a href="https://wa.me/+249992929291" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                    </div>
                </div>

                <div className="contact__contect">
                    <h3 className="contact__title">Write Me Your Project</h3>
                    <form action="" className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name='name' className='contact__form-input' />
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact