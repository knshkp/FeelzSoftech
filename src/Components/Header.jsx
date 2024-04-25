import React from 'react';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import sideImage from '../Images/sideimage.png';


function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className='content-container'>
                {/* Flex container */}
                <div className='content'>
                    <div className='name'>
                        <h1>WELCOME TO FEELZ SOFTECH</h1>
                        <Typewriter
                            className='typewrite'
                            options={{
                                showCursor: false, // Add this line to show the cursor
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Android App Development")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Game Development")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Web Development")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Data Science")
                                .start();
                            }}
                        />

                        <p className='details'>
                            Feelz Softech is a complete business solution internet technology firm. We help you grow your business by analyzing your business idea. We provide services such as UI/UX, Mobile App Development, Website Development, Game Development, Data Science, Salesforce, Digital Marketing, SEO, Content Writing, etc. We have experts and successful sellers all over the marketplace in all fields. We take responsibility to get your business in your hands.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 400 }}>
                            <a href='#contacts' className='cv-btns'>Contact Us</a>
                            <a href='#features' className='cv-btn'>Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
