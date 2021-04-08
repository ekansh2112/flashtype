import React from 'react'
import hero from '../../assets/hero.png'
import './Landing.css'
import Typewriter from 'typewriter-effect';
const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">

                    <Typewriter
                    options={{
                        strings: ['Fast?', 'Quick?','Correct?'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
            </div>

            <div  className="landing-right">
                <img data-aos="fade-left" className="flash-hero" src={hero} alt="hero"/>
            </div>
        </div>
    )
}


export default Landing;