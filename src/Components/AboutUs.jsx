import React from 'react';
import About from './about';
import FeatureImage1 from '../Images/mobile.png';
import FeatureImage2 from '../Images/mobile.png';
import FeatureImage3 from '../Images/mobile.png';

function AboutUs() {
  return (
    <div style={{ padding: '120px' }} id='abouts'>
        {/* Heading */}
        <h1 style={{ textAlign: 'center', marginBottom: '20px' ,color:'white'}}>ABOUT US</h1>
        <p style={{ textAlign: 'center',paddingLeft:'200px',paddingRight:'200px', marginBottom: '100px' ,color:'white'}}>Feelz Softech is a dynamic technology company at the forefront of innovation, specializing in the development of cutting-edge applications, web solutions, games, and software. Our passionate team of skilled engineers and designers is committed to delivering transformative digital experiences across various platforms. We focus on building intuitive and engaging apps that cater to a wide range of user needs, from productivity tools to immersive gaming experiences. Our expertise in crafting bespoke web solutions ensures seamless, efficient, and impactful online presence for our clients. Whether it’s crafting interactive mobile games, developing enterprise-level software, or creating user-friendly web applications, Feelz Softech remains dedicated to excellence, quality, and customer satisfaction in every project we undertake. Through continuous research and development, we strive to stay ahead in the tech world and bring innovative ideas to life.</p>

        {/* Container for the About boxes */}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* Box 1 */}
            <About 
                image={FeatureImage1} 
                title='Our History' 
                description='Briskmins has an exceptional track record in developing solutions on "Salesforce" for last six years for customers.'
            />

            {/* Box 2 */}
            <About 
                image={FeatureImage2} 
                title='Our Mission' 
                description='We are aimed towards helping our clients realize full potential of Salesforce investment, with perfect solution.'
            />

            {/* Box 3 */}
            <About 
                image={FeatureImage3} 
                title='Our Process' 
                description='Our process is completely agile based, so we are easily able to absorb real time feedback to produce a stable solution.'
            />
                        <About 
                image={FeatureImage3} 
                title='Our Vison' 
                description="We believe in providing the best and make our customer's business a success, on latest technology at present."
            />
        </div>
    </div>
  );
}

export default AboutUs;

