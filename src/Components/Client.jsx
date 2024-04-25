import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TrustedClientPage.css'; // Import CSS file for styling
import Image from '../Images/logo-1.png'; // Import the image for client logo
import Sangram from '../Images/snagram.jpg';
import Sarju from '../Images/logo2.png';
import Oggy from '../Images/oggy_logo.png';
import Relyb from '../Images/relyb.png';
import Aviator from '../Images/avaitor.WEBP'
import Lucky from '../Images/lucky.webp'
import DT from '../Images/dt.WEBP'
const TrustedClientsPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="trusted-clients-page">
            <h1 style={{ color: '#fff' }}>Our Trusted Clients</h1>
            <Slider {...settings}>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Sangram Industries</h3>
                    <img src={Sangram} alt="Client 1 Logo" />
                    <p>Milk Management & Ecommerce App</p>
                </div>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Sarju</h3>
                    <img src={Sarju} alt="Sarju" />
                    <p>Digital Earning Platform</p>
                </div>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Relyb</h3>
                    <img src={Relyb} alt="Client 3 Logo" />
                    <p>Home Service Provider</p>
                </div>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Oggy</h3>
                    <img src={Oggy} alt="Client 4 Logo" />
                    <p>Coupoun Code Provider</p>
                </div>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Lucky Brust</h3>
                    <img src={Lucky} alt="Client 6 Logo" />
                    <p>Online Spin Game</p>
                </div>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Cakes World</h3>
                    <img src={Image} alt="Cake Selling App" />
                    <p>Cake Selling App</p>
                </div>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Aviator</h3>
                    <img src={Aviator} alt="Client 6 Logo" />
                    <p>Online Aviator Fantasy Game</p>
                </div>
                <div className="client-card">
                    <h3 style={{ color: '#0bebff' }}>Dragon Tiger</h3>
                    <img src={DT} alt="Client 6 Logo" />
                    <p>Online Fantasy Game</p>
                </div>

            </Slider>
        </div>
    );
};

export default TrustedClientsPage;
