import React from 'react';
import './OurTeamPage.css'; // Import CSS file for styling
import Member1Image from '../Images/member1.jpg'; // Import images for team members
import Member2Image from '../Images/member2.jpg';
import Member3Image from '../Images/member3.jpg';
import Member4Image from '../Images/member4.jpg';
import Member5Image from '../Images/member5.jpg';

const OurTeamPage = () => {
    return (
        <div className="our-team-page">
            <h1 style={{ color: '#fff' }}>Our Team</h1>
            <div className="team-members">
                <div className="member-card">
                    <img src={Member1Image} alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                </div>
                <div className="member-card">
                    <img src={Member2Image} alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>Lead Developer</p>
                </div>
                <div className="member-card">
                    <img src={Member3Image} alt="Team Member 3" />
                    <h3>Emily Johnson</h3>
                    <p>Designer</p>
                </div>
                <div className="member-card">
                    <img src={Member4Image} alt="Team Member 4" />
                    <h3>Michael Brown</h3>
                    <p>Marketing Manager</p>
                </div>
                <div className="member-card">
                    <img src={Member5Image} alt="Team Member 5" />
                    <h3>David Wilson</h3>
                    <p>Content Writer</p>
                </div>
            </div>
        </div>
    );
}

export default OurTeamPage;
