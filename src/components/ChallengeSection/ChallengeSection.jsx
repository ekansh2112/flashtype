import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'


const ChallengeSection = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timerStarted,
    timeRemaining
}) =>{
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now!!
            </h1>
            <TestContainer
             words={words} 
             characters={characters} 
             wpm={wpm} 
             timeRemaining = {timeRemaining}
             timerStarted = {timerStarted}
             selectedParagraph = {selectedParagraph}
             />
        </div>
    )
}

export default ChallengeSection;