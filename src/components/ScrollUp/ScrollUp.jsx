import React, { useEffect } from 'react';
import "./scrollUp.css";

const ScrollUp = () => {

    useEffect(() => {
        const scrollUp = document.querySelector(".scrollup");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
        
    }, []);

    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp;
