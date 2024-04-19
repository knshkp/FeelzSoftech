import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

function FeatureBox({ image, title, description }) {
    const control = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="feature-box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div className='a-box' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {/* Image container */}
                <div className='a-b-img' style={{ flex: '1' }}>
                    <img src={image} alt={title} className='feature-image' />
                </div>
                
                {/* Text container */}
                <div className='s-b-text' style={{ flex: '2', marginLeft: '20px' }}>
                    <h2 className='feature-title'>{title}</h2>
                    <p className='feature-description' style={{ whiteSpace: 'pre-line' }}>{description}</p>
                </div>
            </div>
        </motion.div>
    );
}

FeatureBox.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeatureBox;


